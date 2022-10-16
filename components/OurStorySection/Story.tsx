import Figure from "./Figure";

const Story = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <h1 className="mx-auto">
        {
          "Ukiyo (浮世) is a Japanese fine dining restaurant established in 2022. It is situated at the heart of Dhaka in Gulshan. It dedicates itself to serving memorable tastes with a strong conviction for authenticity. It prides itself in bringing the complete experience of Japanese food instead of being limited to only one or two categories."
        }
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Figure
          name={"Daisuke Watanabe"}
          message={
            "The Watanabes have been chefs for many generations in Kyoto, Japan. My father was a chef. My grandfather was a chef. Even my great-grandfather learned to be a chef from his forefathers. I am the only one who traveled to a foreign country to carry on the legacy of my family. My reason is the magic I feel every time a person unfamiliar with our food tastes their first bite."
          }
          position={"Executive Chef"}
          imageUrl={"/assets/images/people/chef.webp"}
        />
        <Figure
          name={"Jihan Jasper Al-rashid"}
          message={
            "I've been an enthusiast of Japanese food for many years. However, it was not until I visited Kyoto, Japan did I truly comprehend why they call it the cultural capital of Japan. I always had a lot of respect for our local Japanese restaurants for introducing me to the wonderland of this cuisine. However, I sought a more complete picture than only sushi."
          }
          position={"Owner"}
          imageUrl={"/assets/images/people/owner.webp"}
        />
      </div>
    </div>
  );
};

export default Story;
