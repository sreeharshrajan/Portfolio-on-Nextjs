import Image from "next/image";
import styled from "styled-components";

const ImageContainer = styled.div`
  width: 30rem;
  height: 30rem;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 20rem;
    height: 20rem;
  }
`;

const NamasteImage = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  display: inline-block;
`;
export default function Home() {
  return (
    <section>
      <div className="homeWrapper">
        <div className="landingText">
          <h1>
            Namaste{" "}
            <NamasteImage>
              <Image
                src="/images/namaste.png"
                alt="logo"
                layout="fill"
                quality={100}
              />
            </NamasteImage>
          </h1>
          <h1>I&apos;m Sreeharsh K,</h1>
          <h3>a web developer</h3>
        </div>
        <div className="landingImage">
          <ImageContainer>
            <Image
              src="/images/blobHidden.svg"
              alt="logo"
              layout="fill"
              quality={100}
            />
          </ImageContainer>
        </div>
      </div>
    </section>
  );
}
