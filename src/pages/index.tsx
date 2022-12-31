import { CardWithHeaderSection } from "../components/ReusableComponent/CardWithHeaderSection";
import {
  cardWithHeaderSectionDate,
  reportData,
} from "../constent/cardWithHeaderSectionDate";
import { CardHeaderSection } from "../modules/Dashboard/CardHeaderSection";
import { ReportSection } from "../modules/Dashboard/ReportSection";

export default function Home() {
  const data = reportData.map((i) => {
    return i;
  });
  console.log(data, "data");
  return (
    <div className="w-full">
      <CardHeaderSection />
      <div className="py-6 px-10 w-full grid grid-cols-2 gap-10">
        {cardWithHeaderSectionDate.map((i) => {
          return (
            <div key={i.id}>
              <CardWithHeaderSection
                name={i.name}
                questionOne={i.questionOne}
                answerOne={i.answerOne}
                questionTwo={i.questionTwo}
                answerTwo={i.answerTwo}
                link={i.link}
                linkLabel={i.linkLabel}
              />
            </div>
          );
        })}
        <ReportSection
          name={data[0].name}
          questionOne={data[0].questionOne}
          answerOne={data[0].answerOne}
          questionTwo={data[0].questionTwo}
          answerTwo={data[0].answerTwo}
          link={""}
        />
      </div>
    </div>
  );
}
