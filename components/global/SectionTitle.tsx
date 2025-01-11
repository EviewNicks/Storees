import { Separator } from "@/components/ui/separator";

type SectionTitleProps = {
  text: String;
};

const SectionTitle = ({ text }: SectionTitleProps) => {
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {text}
        <hr />
      </h2>
    </div>
  );
};

export default SectionTitle;
