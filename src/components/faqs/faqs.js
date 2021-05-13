import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "../../assets/misc/Headings.js";
import { SectionDescription } from "../../assets/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "../../assets/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../assets/icons//svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../assets/icons//svg-decorator-blob-8.svg";
import fire from '../../fire'

const Subheading = tw(SubheadingBase)`mb-4 text-lg text-center dark:text-white text-gray-800`;
const Heading = tw(SectionHeading)`w-full dark:text-white text-gray-800`;
const Description = tw(SectionDescription)`w-full text-center dark:text-white text-gray-800`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-white  hover:bg-gray-200 transition duration-300`;
const Question = tw.dt`flex justify-between items-center text-gray-800`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold `;
const QuestionToggleIcon = motion.custom(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion.custom(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed text-gray-800`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-20 absolute right-0 top-0 h-56 w-56 opacity-20 transform translate-x-2/3 -translate-y-12 text-green-500`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none z-20 absolute left-0 bottom-0 h-64 w-64 opacity-20 transform -translate-x-2/3 text-primary-500`}
`;



export default function Faqs ({
  subheading = "Түгээмэл асуултууд",
  heading = "Танд ямар нэгэн асуулт бий юу ?",
  description = "",
}) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);
  const [faqs, setFaqs] = useState([]);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  useEffect(() => {
    async function fetchData() {
      await fire.firestore().collection("faqs").get().then((i) => {
        const items = i.docs.map((d) => d.data());
        setFaqs(items);
      })
    }
    fetchData();
  }, []);

  return (
    <Container>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.faqsName}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.faqsAnswer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1/>
      <DecoratorBlob2 />
    </Container>
  );
};
