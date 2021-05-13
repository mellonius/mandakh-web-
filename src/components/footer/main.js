import React from "react";
import tw from "twin.macro";
import bgdark from "../../assets/images//mandakh3.png";


export default function HomeMain() {
  const ColumnHeading = tw.h5`font-bold uppercase dark:text-white text-red-400`;
  const LinkList = tw.ul`mt-4 text-sm font-medium`;
  const LinkListItem = tw.li`mt-3`;
  const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-primary-100 pb-1 transition duration-300 mt-2 dark:text-white text-white`;
 


  return (
    <div className="bg-fixed" style={{ backgroundImage: "url(" + bgdark + ")" }}>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 justify-center md:mx-64 text-center " >
        <div className=" my-2">
          <ColumnHeading>АЛБА, НЭГЖ</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Захирлын ажлын алба</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Сургалтын алба</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Санхүү, аж ахуйн алба</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Бусад алба нэгж</Link>
            </LinkListItem>
          </LinkList>
        </div>
        <div className="my-2">
          <ColumnHeading>ОЮУТАН</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="http://online.mandakh.org/">Оюутны веб</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://mail.google.com/">Оюутны мэйл</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Оюутны зөвлөл</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Оюутны тэтгэлэгт хөтөлбөр</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Оюутны зээл, тусламж</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Оюутны клуб, дугуйлан</Link>
            </LinkListItem>
          </LinkList>
        </div>
        <div className="my-2">
          <ColumnHeading>ТӨГСӨГЧИД</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Төгсөгчдийн холбоо</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Төгсөгчид</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Бид-Манлайлагчид</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Ажил олгогчдоос ирүүлсэн<br />ажлын байрны саналууд</Link>
            </LinkListItem>
          </LinkList>
        </div>
        <div className="my-2">
          <ColumnHeading>НОМЫН САН</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Танилцуулга</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Шинэ номын мэдээ</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Багш нарын бүтээл</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="https://mandakh.lib4u.net/">Электрон каталоги</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Фэйсбүүк хуудас</Link>
            </LinkListItem>
          </LinkList>
        </div>
       
      </div>
      {/* <DecoratorBlob1 />
      <DecoratorBlob2 /> */}
    </div>
  );
};
