import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { siteConfig } from "@/lib/config";

export default function Component() {
  return (
    <Section
      title={siteConfig.features.title}
      subtitle={siteConfig.features.subtitle}
    >
      <Features
        collapseDelay={5000}
        linePosition="bottom"
        data={siteConfig.features.featuresList}
      />
    </Section>
  );
}
