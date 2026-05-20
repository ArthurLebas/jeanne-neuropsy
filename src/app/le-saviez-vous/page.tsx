import type { Metadata } from "next";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Qu'est-ce que le TDA/H ? | Jeanne Gontier Neuropsychologue",
  description:
    "Trouble Déficit de l'Attention avec ou sans hyperactivité : symptômes, formes et prévalence. Cabinet de neuropsychologie à Lagny-sur-Marne.",
};

export default function TDAHPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-teal-dark text-white pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-teal-light/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight animate-fade-up">
            Trouble Déficit de l&apos;Attention avec ou sans hyperactivité,
            qu&apos;est-ce que c&apos;est ?
          </h1>
          <div className="mt-8 text-white/80 text-lg leading-relaxed space-y-4 animate-fade-up animate-delay-200">
            <p>
              Le TDA/H est l&apos;un des troubles du neurodéveloppement les plus
              fréquents. Il se traduit par un niveau d&apos;inattention,
              d&apos;impulsivité et d&apos;hyperactivité (agitation motrice)
              plus élevé que la moyenne.
            </p>
            <p>
              On observe ces manifestations rapidement au cours du développement
              (avant 12 ans) et elles impactent différentes sphères de la vie de
              l&apos;enfant : au niveau scolaire, au niveau social, ou encore au
              sein du foyer familial. Encore aujourd&apos;hui, le TDA/H est
              empreint de fausses croyances et de neuro-mythes qui limitent la
              compréhension des enfants concernés et peuvent altérer leur estime
              d&apos;eux-mêmes.
            </p>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-teal-dark mb-12">
              Quels sont les symptômes du TDA/H ?
            </h2>
          </RevealOnScroll>

          {/* Inattention */}
          <RevealOnScroll>
            <div className="mb-12">
              <h3 className="font-heading text-xl text-teal mb-4">
                L&apos;inattention est au coeur du TDA/H :
              </h3>
              <div className="text-text-light leading-relaxed space-y-4">
                <p>
                  Il lui est difficile de{" "}
                  <strong className="text-text">soutenir son attention</strong>,
                  tant au travail que dans les jeux, ce qui peut engendrer un{" "}
                  <strong className="text-text">évitement</strong> des tâches qui
                  lui semblent trop longues ou trop complexes et qui risquent de
                  le mettre en difficulté.
                </p>
                <p>
                  Il fait souvent des fautes{" "}
                  <strong className="text-text">d&apos;étourderie</strong>,
                  oublie ou perd ses affaires. Il se laisse{" "}
                  <strong className="text-text">distraire</strong> facilement,
                  semble avoir l&apos;esprit ailleurs lorsqu&apos;on lui parle.
                  On le décrit comme étant « dans la lune ». S&apos;organiser
                  dans son travail et mener ses devoirs scolaires à terme
                  peuvent être de vrais défis du quotidien !
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Hyperactivité et impulsivité */}
          <RevealOnScroll>
            <div className="mb-12">
              <h3 className="font-heading text-xl text-teal mb-4">
                L&apos;hyperactivité et l&apos;impulsivité :
              </h3>
              <ul className="space-y-6 text-text-light leading-relaxed">
                <li className="pl-6 border-l-2 border-amber">
                  <p>
                    L&apos;hyperactivité va engendrer une{" "}
                    <strong className="text-text">agitation motrice</strong>{" "}
                    importante chez votre enfant : il lui est difficile de rester
                    assis, il se tortille sur son siège, agite ses pieds ou ses
                    mains. Il semble infatigable ! Il court, il grimpe partout…
                  </p>
                </li>
                <li className="pl-6 border-l-2 border-amber">
                  <p>
                    L&apos;impulsivité est en réalité un déficit de{" "}
                    <strong className="text-text">l&apos;inhibition</strong>.
                    C&apos;est-à-dire qu&apos;il va avoir du mal à se filtrer, à
                    bloquer et inhiber certaines réponses motrices ou verbales.
                    Il peut ainsi donner l&apos;impression de parler trop
                    souvent, d&apos;avoir des difficultés à attendre, de couper
                    la parole, ou encore à se réguler au niveau émotionnel…
                  </p>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          {/* Info card */}
          <RevealOnScroll>
            <div className="bg-sky-light rounded-2xl p-8 mb-12">
              <h4 className="font-heading text-lg text-teal-dark mb-3">
                Qu&apos;est-ce qu&apos;un trouble neurodéveloppemental ?
              </h4>
              <p className="text-text-light leading-relaxed">
                Il s&apos;agit d&apos;un trouble qui est lié au fonctionnement
                du cerveau (neuro) et qui existe depuis la naissance et restera
                tout au long de la vie (développemental).
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 3 forms */}
      <section className="py-20 lg:py-28 bg-sand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-teal-dark mb-12">
              Il existe 3 formes de TDA/H
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <ul className="space-y-6">
              <li className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-text-light leading-relaxed">
                  Un{" "}
                  <strong className="text-teal-dark">forme combinée</strong>,
                  avec à la fois des symptômes d&apos;inattention et des
                  symptômes d&apos;hyperactivité et d&apos;impulsivité.
                </p>
              </li>
              <li className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-text-light leading-relaxed">
                  Une{" "}
                  <strong className="text-teal-dark">
                    forme d&apos;inattention prédominante
                  </strong>
                  , avec principalement les symptômes liés aux difficultés
                  attentionnelles.
                </p>
              </li>
              <li className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-text-light leading-relaxed">
                  Une{" "}
                  <strong className="text-teal-dark">
                    forme hyperactive et impulsive prédominante
                  </strong>
                  , avec majoritairement un trouble de l&apos;hyperactivité et de
                  l&apos;impulsivité et une atteinte attentionnelle qui est
                  moindre.
                </p>
              </li>
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="mt-12 text-text-light leading-relaxed space-y-4">
              <p>
                La prévalence d&apos;enfants vivant avec un TDAH est de 5 à
                7,2%*. Il serait plus fréquent chez les garçons que chez les
                filles, avec un ratio de 2 garçons diagnostiqués pour 1 fille.
                Cependant, les filles passeraient parfois entre les mailles du
                diagnostic ! Ces dernières présenteraient majoritairement des
                symptômes d&apos;inattention et peu de symptômes
                d&apos;hyperactivité, qui sont, au contraire, très marqués chez
                les garçons et bien plus visibles.
              </p>
              <p className="text-sm text-text-light/70 italic">
                *Polanczyk, Willcutt, Salum, Kieling &amp; Rhode, 2014 ;
                Thomas, Sanders, Doust, Beller &amp; Glasziou, 2015
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
