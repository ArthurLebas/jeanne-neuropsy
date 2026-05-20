import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";
import WaveDivider from "@/components/WaveDivider";

export const metadata: Metadata = {
  title: "Thérapie de relaxation | Jeanne Gontier Neuropsychologue",
  description:
    "Méditation et mouvement : séances de relaxation mêlant yoga restauratif, yin yoga et méditation guidée. Cabinet de neuropsychologie à Lagny-sur-Marne.",
};

export default function RelaxationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-sand to-sand-light pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-sand/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-teal-dark leading-tight animate-fade-up">
            Méditation et mouvement
          </h1>
          <div className="mt-8 text-text-light text-lg leading-relaxed animate-fade-up animate-delay-200">
            <p>
              En petit groupe, ou en individuel, 1h pour se relaxer. La séance
              comprend un premier temps de centrage pour se concentrer sur sa
              respiration et apprendre à orienter le regard vers
              l&apos;intérieur de soi. Après un léger échauffement des
              articulations, plusieurs postures de yoga seront proposées. Les
              postures sont accessibles, maintenues quelques minutes et
              l&apos;enchainement se fait en douceur. Puis un temps de
              méditation guidée, incluant un bodyscan, des exercices de
              respiration et des visualisations, est proposé.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider topColor="var(--color-sand-light)" bottomColor="#ffffff" variant={9} />

      {/* L'intérêt du mouvement */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-teal-dark mb-8">
              L&apos;intérêt du mouvement
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="text-text-light leading-relaxed space-y-4">
              <p>
                Les postures proposées sont issues du yoga restauratif et du yin
                yoga. Il s&apos;agit d&apos;un enchainement doux et lent qui
                permet à la fois d&apos;étirer certains muscles et certaines
                articulations, et de ralentir le mental.
              </p>
              <p>
                En yin yoga, les postures sont tenues 2-3 min afin de créer un
                léger stress sur les parties du corps visées. Cela va permettre
                de réorganiser les fibres de collagène, stimuler la production
                d&apos;acide hyaluronique et de renforcer les tissus
                conjonctifs. Le mouvement est anti-inflammatoire, il va réduire
                la dégénérescence naturelle des articulations. Cette pratique de
                yoga va jouer un rôle dans la résilience des articulations via le
                travail de leur amplitude.
              </p>
              <p>
                Les postures issues du yoga restauratif sont tenues plus
                longtemps, souvent à l&apos;aide de coussin (bolster) ou autre
                accessoire. L&apos;objectif ici est d&apos;atteindre un niveau
                de relaxation corporel et mental, d&apos;apprendre à lâcher
                prise.
              </p>
              <p>
                Au niveau mental et émotionnel, cette pratique va donc permettre
                au corps de se détendre. Cette technique va réduire
                l&apos;activité du système nerveux sympathique et peut agir sur
                notre système endocrinien, notamment en réduisant le taux de
                cortisol. Elle va également permettre de conscientiser son corps,
                et ses pensées.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <WaveDivider topColor="#ffffff" bottomColor="var(--color-sand-light)" variant={10} />

      {/* L'intérêt de la méditation */}
      <section className="py-20 lg:py-28 bg-sand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-teal-dark mb-8">
              L&apos;intérêt de la méditation
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="text-text-light leading-relaxed space-y-4">
              <p>
                La méditation permet de rencontrer le calme, en favorisant
                certains états de conscience et en modifiant les ondes
                cérébrales. Cela apprend à rester présent, et à limiter les
                ruminations. En ce sens, la méditation peut avoir un impact sur
                les troubles anxieux et dépressifs légers à modérés.
              </p>
              <p>
                La pleine conscience va permettre de travailler sur
                l&apos;auto-régulation de l&apos;attention, notamment en
                désactivant notre &laquo;&nbsp;auto-pilote&nbsp;&raquo; et en se
                focalisant sur un phénomène précis (sa respiration ou ses
                sensations par exemple). La focalisation attentionnelle sur notre
                expérience émotionnelle et physique nous permet de mieux nous
                connecter à nos besoins.
              </p>
              <p className="text-lg font-medium text-teal-dark italic">
                Elle est l&apos;occasion de ralentir, de respirer, de prendre du
                temps pour soi.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
