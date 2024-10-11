import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { siteConfig } from "@/lib/config";

export default function Component() {
  return (
    <Section
      title={siteConfig.howTo.title}
      subtitle={siteConfig.howTo.subtitle}
    >
      <Features data={siteConfig.howTo.steps} />
    </Section>
  );
}
