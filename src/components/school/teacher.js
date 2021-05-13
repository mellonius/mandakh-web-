import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import HomeFooter from "../footer/footer";
import HomeMain from "../footer/main";
import { Container, ContentWithPaddingXl } from "../../assets/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "../../assets/misc/Headings";
import {SectionDescription} from "../../assets/misc/Typography";
import { ReactComponent as TwitterIcon} from "../../assets/icons//twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "../../assets/icons//facebook-icon.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons//youtube-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../assets/icons//svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../assets/icons//svg-decorator-blob-8.svg";

const HeadingContainer = tw.div` dark:text-white text-gray-800`
const Heading = tw(SectionHeading)` dark:text-white text-gray-800`
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`
const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto  `
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center  `
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`  w-52 h-52 bg-contain bg-center rounded hover:bg-primary-900 hover:opacity-75 `}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6 `}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs  text-primary-600 text-center dark:text-white text-gray-800`}
  }
  .name {
    ${tw` mt-1 text-xl font-medium text-gray-900  dark:text-white text-gray-800`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-20 absolute right-0 top-0 h-56 w-56 opacity-20 transform translate-x-2/3 -translate-y-12 text-green-500`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none z-20 absolute left-0 bottom-0 h-64 w-64 opacity-20 transform -translate-x-2/3 text-primary-500`}
`;

export default function Teacher ({
  heading = "Манай багш нар",
  subheading = "",
  description = "Мэдээллийн технологийн хөтөлбөрийн боловсролын агуулга нь системийн шинжилгээ, програмист, байгууллагын мэдээллийн систем хэрэглэх мэдлэг чадвар эзэмшүүлэхэд чиглэгдэнэ.",
  cards = [
    {
      imageSrc: "https://cdn.greensoft.mn/uploads/site/883/photos/block/v_20200820145342_9a6230fcba87ce7ca6209058341ec925.jpg",
      position: "Мэдээлэл, технологийн сургуулийн захирал",
      name: "Ө.Ганзориг",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://cdn.greensoft.mn/uploads/site/883/photos/block/v_20200820145622_6315338f10f54195a0f207328726e8a1.jpg",
      position: "Компьютерийн ухааны тэнхимийн эрхлэгч",
      name: "Я. Сүхбаатар",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://cdn.greensoft.mn/uploads/site/883/photos/block/v_20200820145434_dbb9371e7d67e807efc4ce8c01f60834.jpg",
      position: "Доктор, Профессор",
      name: "Ш. Оросоо",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://cdn.greensoft.mn/uploads/site/883/photos/block/v_20200820145528_4ecba0a49263fef9ce4a076b8f8fbd55.jpg",
      position: "Дэд профессор",
      name: "Д. Сарантуяа",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://cdn.greensoft.mn/uploads/site/883/photos/block/v_20200820145726_173422ff6210877ac6c735c512915d86.jpg",
      position: "Ахлах багш",
      name: "П. Зоригтбаатар",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://scontent.fuln6-1.fna.fbcdn.net/v/t31.0-8/24785080_1500912679974359_6809397425477191743_o.jpg?_nc_cat=105&ccb=2&_nc_sid=84a396&_nc_ohc=DAJiJjZApboAX_FgxWB&_nc_oc=AQlAGa_patg-O8sx07kcEHhtXoTW8KXCFrouV4U_tY3Yq9T0mKJ0ISNUrovurx5ylkw&_nc_ht=scontent.fuln6-1.fna&oh=171e6242b67e57f095de3cce57c68dd9&oe=6036BCD1",
      position: "Ахлах багш",
      name: "Ш. Энхтамир",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://cdn.greensoft.mn/uploads/site/883/photos/block/v_20200820145655_28a6faa922f9125354ed2f0303f0f725.jpg",
      position: "Ахлах багш",
      name: "Б. Цэнд-Аюуш",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://cdn.greensoft.mn/uploads/site/883/photos/block/v_20201029153813_8df7b73a7820f4aef47864f2a6c5fccf.jpg",
      position: "Багш",
      name: "Н. Ринчмаа",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://cdn.greensoft.mn/uploads/site/883/photos/block/v_20201029154222_9414a8f5b810972c3c9a0e2860c07532.jpg",
      position: "Багш",
      name: "Д. Номиндарь",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    
    
  ]
}){
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
      <DecoratorBlob1/>
      <DecoratorBlob2 />
      <HomeMain/>
      <HomeFooter/>
    </Container>
  );
};
