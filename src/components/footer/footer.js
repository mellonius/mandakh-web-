import React from "react";
import tw from "twin.macro";
import LogoImage from "../../assets/images/mandakh.png";
import { ReactComponent as SvgDecoratorBlob1 } from "../../assets/icons//svg-decorator-blob-9.svg";

const Container = tw.div`relative select-none w-screen bg-blue-900 text-white flex flex-wrap flex-row justify-center  py-20 lg:py-24`;
const Content = tw.div`max-w-screen-xl mx-auto relative z-10`;
const FiveColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;
const Column = tw.div`px-4 sm:px-0 sm:w-1/3 md:w-auto mt-12`;
const ColumnHeading = tw.h5`uppercase font-bold text-base text-white`;
const LinkList = tw.ul`mt-6 text-sm text-gray-300 font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-100 pb-1 transition duration-300`;
const Divider = tw.div`my-16 border-b-2 border-gray-400 w-full`;
const ThreeColRow = tw.div`min-w-3xl md:min-w-7xl flex flex-col md:flex-row items-center justify-between`;
const LogoContainer = tw.div`flex items-center justify-center md:justify-start  mr-5`;
const LogoImg = tw.img`w-80`;
const CopywrightNotice = tw.p` text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-400`;
const DecoratorBlobContainer = tw.div`absolute inset-0 overflow-hidden rounded-lg`;
const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute top-0 left-0 w-80 h-80 transform -translate-x-20 -translate-y-32 text-primary-700 opacity-50`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob1
)`absolute bottom-0 right-0 w-80 h-80 transform  translate-x-32 translate-y-48 text-primary-700 opacity-50`;

export default function Footer () {
  return (
    <Container>
      <Content>
        <FiveColumns>
          <Column>
            <ColumnHeading>ХАЯГ БАЙРШИЛ</ColumnHeading>
            <LinkList>
           
        Баянгол дүүрэг, 16-р
        <br />
        хороо,Амарсанаагийн
        <br />
        гудамж 18/1,
        <br />
        Улаанбаатар хот,
        <br />
        Монгол,Шуудангийн
        <br />
        хаяг: УБ-16040,Ш/Х:88,
        <br />
        Мандах Их Сургууль
        <br />
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>ИМЭЙЛ ХАЯГ</ColumnHeading>
            <LinkList>
            <p>
        info@mandakh.edu.mn
        </p>
            </LinkList>
            <br/>
            <ColumnHeading>ХОЛБОГДОХ УТАС</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <p>7018-5950, 7018-5949</p>
              </LinkListItem>
            </LinkList>
          </Column>
          <Column>
            <ColumnHeading>БУСАД ХОЛБООСУУД</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link to="/" className="text-gray-300 hover:text-white">Ажлын байр </Link>
              </LinkListItem>
              <LinkListItem>
                <Link to="/" className="text-gray-300 hover:text-white">Видео сан</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to="/" className="text-gray-300 hover:text-white">Лого татах</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to="/" className="text-gray-300 hover:text-white">Brand Book</Link>
              </LinkListItem>
              <LinkListItem>
                <Link to="/" className="text-gray-300 hover:text-white">Цахим сургалтын систем</Link>
              </LinkListItem>
            </LinkList>
          </Column>
          
        </FiveColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            <LogoImg src={LogoImage} />
          </LogoContainer>
          <CopywrightNotice>&copy; Copyright 2021</CopywrightNotice>
         
        </ThreeColRow>
      </Content>
      <DecoratorBlobContainer>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </DecoratorBlobContainer>
    </Container>
  );
}
