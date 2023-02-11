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
      </div>
    </div>
  );
}
