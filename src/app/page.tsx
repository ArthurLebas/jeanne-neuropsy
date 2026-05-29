import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-sky-light via-sky/40 to-sky-light overflow-hidden"
      >
        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-sky/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-sand/40 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center pt-20">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-teal-dark leading-tight animate-fade-up">
            Cabinet de Neuropsychologie et Psychothérapie
          </h1>
          <div className="mt-8 space-y-4 text-text-light text-base sm:text-lg leading-relaxed animate-fade-up animate-delay-200">
            <p>
              Bilan intellectuel et
              attentionnel chez l&apos;enfant à partir de 6 ans (attention je ne
              propose pas de bilan TSA), dépistage dyscalculie.
            </p>
            <p>
              Pour l&apos;adulte : thérapie de relaxation et pleine conscience,
              accompagnement vers une meilleure compréhension de son
              fonctionnement cognitif et émotionnel.
            </p>
          </div>
          <div className="mt-10 animate-fade-up animate-delay-300">
            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-teal text-white rounded-full font-medium hover:bg-teal-dark transition-colors shadow-lg shadow-teal/20"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </section>

      <WaveDivider topColor="var(--color-sky-light)" bottomColor="var(--color-sand-light)" variant={1} />

      {/* ===== À PROPOS ===== */}
      <section id="a-propos" className="py-20 lg:py-28 bg-sand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <RevealOnScroll>
                <h2 className="font-heading text-3xl sm:text-4xl text-teal-dark mb-8">
                  Qui suis-je ?
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <div className="space-y-4 text-text-light leading-relaxed">
                  <p>
                    Je suis psychologue spécialisée en neuropsychologie depuis
                    2019.
                  </p>
                  <p>
                    J&apos;ai réalisé un master en Neuropsychologie et
                    neuro-imageries cognitives à l&apos;université de Bordeaux,
                    puis un Diplôme Universitaire à la faculté de médecine de la
                    Sorbonne sur les Troubles du Neurodéveloppement. Par la
                    suite, j&apos;ai participé à plusieurs formations de yoga et
                    de méditation auprès de Anaïs Varnier.
                  </p>
                  <p>
                    Depuis 2022, je travaille avec des enfants dans un Centre
                    Médico-Psychologique, et au sein de l&apos;association
                    OnCogite pour des adultes en post traitements oncologiques.
                  </p>
                  <p>
                    Au sein de mon cabinet, j&apos;accueille les enfants, les
                    adolescents et les adultes pour des évaluations
                    psychométriques (bilan intellectuel) et neuropsychologiques
                    (fonctions attentionnelles, fonctions exécutives, fonctions
                    mnésiques…) dans le cadre d&apos;une suspicion de Trouble du
                    Neurodéveloppement, et/ou de troubles des apprentissages
                    (dépistage de difficulté en orthographe, en calcul, en
                    lecture...), de difficulté de régulation émotionnelle etc...
                  </p>
                  <p>
                    Je propose également des suivis thérapeutiques à travers des
                    espaces de relaxations : pleine conscience, méditation ou
                    encore avec des techniques corporelles autour du yoga. Ces
                    techniques permettent d&apos;apaiser le mental, les émotions
                    et le corps. Ainsi que des suivis basés sur la{" "}
                    Thérapie d&apos;Acceptation et d&apos;Engagement (ACT)
                    . L&apos;objectif est d&apos;apprendre à faire face aux
                    événements de la vie en acceptant ce qui est au delà de
                    votre contrôle, tout en vous engageant dans des actes qui
                    sont en adéquations avec vos valeurs.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-2 flex justify-center">
              <RevealOnScroll delay={200}>
                <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-white p-6 sm:p-8 lg:p-10 drop-shadow-lg">
                  <Image
                    src="/logo-JG.png"
                    alt="Jeanne Gontier - Psychologue spécialisée en neuropsychologie"
                    width={1254}
                    height={1254}
                    className="w-full h-full object-contain rounded-full"
                    priority={false}
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider topColor="var(--color-sand-light)" bottomColor="#ffffff" variant={2} />

      {/* ===== POURQUOI FAIRE UN BILAN ===== */}
      <section id="bilan" className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-teal-dark text-center mb-8">
              Pourquoi faire un bilan neuropsychologique ?
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p className="text-text-light leading-relaxed text-center text-lg">
              Un bilan neuropsychologique est recommandé lorsque l&apos;enfant ou
              l&apos;adolescent, rencontre des difficultés dans son
              fonctionnement au quotidien (à l&apos;école, à la maison).
              L&apos;objectif est de donner un éclairage sur le fonctionnement
              cognitif afin de l&apos;orienter vers des prises en charges
              adaptées. Il permet de détecter les points forts et les difficultés
              de la personne afin de proposer des recommandations
              individualisées, destinées aux parents, aux professionnels médicaux
              et paramédicaux qui accompagnent l&apos;enfant mais aussi aux
              enseignants (suggestions d&apos;aménagements pédagogiques
              adaptés).
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <WaveDivider topColor="#ffffff" bottomColor="var(--color-sky-light)" variant={3} />

      {/* ===== DÉROULEMENT ===== */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-sky-light to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-teal-dark text-center mb-16">
              Déroulement d&apos;un bilan intellectuel et/ou attentionnel chez
              l&apos;enfant
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <RevealOnScroll delay={0}>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg shadow-amber/10 border border-amber-light/50 hover:shadow-xl hover:shadow-amber/15 transition-shadow">
                <div className="w-12 h-12 bg-amber rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
                  1
                </div>
                <h3 className="font-heading text-xl text-teal-dark mb-4">
                  Entretien de rencontre
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  Premier rendez-vous d&apos;environ 1h. L&apos;objectif est de
                  se rencontrer, et de récolter toutes les informations
                  nécessaires à la compréhension de la problématique rencontrée
                  et de vos attentes.
                </p>
              </div>
            </RevealOnScroll>

            {/* Step 2 */}
            <RevealOnScroll delay={150}>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg shadow-amber/10 border border-amber-light/50 hover:shadow-xl hover:shadow-amber/15 transition-shadow">
                <div className="w-12 h-12 bg-amber rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
                  2
                </div>
                <h3 className="font-heading text-xl text-teal-dark mb-4">
                  Tests neuropsychologiques
                </h3>
                <div className="text-text-light text-sm leading-relaxed space-y-3">
                  <p>
                    Les tests se déroulent au sein de mon bureau. Le bilan
                    nécessite systématiquement une évaluation de l&apos;efficience
                    intellectuelle afin de situer l&apos;enfant par rapport à son
                    groupe d&apos;âge et de cibler les investigations
                    complémentaires.
                  </p>
                  <p>
                    Le bilan intellectuel est réalisé dans un premier temps sur
                    une durée de 1h30.
                  </p>
                  <p>
                    Puis, une deuxième rencontre d&apos;1h30 est nécessaire pour
                    la réalisation du bilan attentionnel.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Step 3 */}
            <RevealOnScroll delay={300}>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg shadow-amber/10 border border-amber-light/50 hover:shadow-xl hover:shadow-amber/15 transition-shadow">
                <div className="w-12 h-12 bg-amber rounded-full flex items-center justify-center text-white font-bold text-lg mb-6">
                  3
                </div>
                <h3 className="font-heading text-xl text-teal-dark mb-4">
                  Restitution
                </h3>
                <div className="text-text-light text-sm leading-relaxed space-y-3">
                  <p>
                    Une dernière rencontre d&apos;environ 1h est proposée afin de
                    présenter et expliquer les résultats du bilan, pour aborder
                    une éventuelle prise en charge, des aménagements, des
                    préconisations. Ce rendez-vous peut nécessiter un temps de
                    psychoéducation.
                  </p>
                  <p>
                    Un compte rendu écrit, détaillant l&apos;entièreté du bilan,
                    est fourni.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#ffffff" bottomColor="var(--color-sand-light)" variant={4} />

      {/* ===== PRISES EN CHARGE ===== */}
      <section id="prises-en-charge" className="py-20 lg:py-28 bg-sand-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-teal-dark text-center mb-16">
              Les prises en charge
            </h2>
          </RevealOnScroll>

          <div className="space-y-16">
            {/* Remédiation */}
            <RevealOnScroll>
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md">
                <h3 className="font-heading text-2xl text-teal-dark mb-4">
                  Remédiation cognitive et psychoéducation
                </h3>
                <p className="text-text-light leading-relaxed">
                  La remédiation cognitive est l&apos;entrainement des fonctions
                  cognitives fragiles ou déficitaires, en groupe ou en
                  individuel, via des activités comme des exercices ou des jeux
                  de sociétés. Ici, accompagnée de psychoéducation, elle permet
                  une meilleure compréhension du trouble afin d&apos;adapter au
                  mieux son quotidien et d&apos;améliorer sa qualité de vie.
                </p>
              </div>
            </RevealOnScroll>

            {/* Relaxation */}
            <RevealOnScroll>
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md">
                <h3 className="font-heading text-2xl text-teal-dark mb-4">
                  Thérapie de relaxation et de pleine conscience
                </h3>
                <div className="text-text-light leading-relaxed space-y-4">
                  <p>
                    Je propose des espaces de relaxation mêlant méditation guidée
                    et mouvements de yoga. Il s&apos;agit de mouvement doux, et
                    accessibles, inspirés du yoga restauratif et du yin yoga. Ces
                    exercices permettent d&apos;apprendre à se détendre, à lâcher
                    prise ; de rééquilibrer la balance entre système sympathique
                    et parasympathique ; ainsi que de conscientiser son corps. Ce
                    type de pratique peut être bénéfique pour l&apos;anxiété, les
                    troubles du sommeil, et pour entrainer ses capacités
                    attentionnelles.
                  </p>
                  <p>
                    Cette approche est non dogmatique, et non spirituelle. Elle
                    est basée sur les bienfaits du mouvement fonctionnel et de la
                    respiration.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* ACT */}
            <RevealOnScroll>
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-md">
                <h3 className="font-heading text-2xl text-teal-dark mb-4">
                  Thérapie d&apos;Acceptation et d&apos;Engagement
                </h3>
                <p className="text-text-light leading-relaxed">
                  L&apos;objectif est d&apos;apprendre à faire face aux
                  événements de la vie en acceptant ce qui est au delà de votre
                  contrôle, tout en vous engageant dans des actes qui sont en
                  adéquations avec vos valeurs.
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
      
      {/* ===== TARIFS ===== */}
      <section
        id="tarifs"
        className="py-20 lg:py-28 bg-teal-dark text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-light/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-center mb-12">
              Tarifs
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="space-y-4">
              {[
                {
                  label: "Première consultation en vue d\u2019un bilan",
                  price: "90\u202F\u20AC",
                },
                {
                  label: "Bilan psychométrique (efficience intellectuelle)",
                  price: "280\u202F\u20AC*",
                },
                {
                  label: "Bilan psychométrique + attentionnel",
                  price: "480\u202F\u20AC*",
                },
                { label: "Bilan attentionnel seul", price: "280\u202F\u20AC*" },
                {
                  label: "Exploration trouble des apprentissages",
                  price: "sur devis",
                },
                {
                  label: "Suivi thérapeutique (au cabinet ou en ligne)",
                  price: "60\u202F\u20AC",
                },
                { label: "Remédiation cognitive", price: "70\u202F\u20AC" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-3 border-b border-white/15 last:border-0"
                >
                  <span className="text-white/90">{item.label}</span>
                  <span className="font-semibold text-amber-light ml-4 shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="mt-10 space-y-3 text-sm text-white/70">
              <p>
                *Ces tarifs comprennent les séances d&apos;évaluation, la
                cotation et l&apos;interprétation des tests et des
                questionnaires ainsi que la restitution.
              </p>
              <p>
                Moyens de paiement acceptés : chèque, espèces, virement
                bancaire. Possibilité de règlement en plusieurs fois.
              </p>
              <p>
                Une facture vous sera remise pour une demande de remboursement
                auprès de votre mutuelle.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      
      {/* ===== CONTACT ===== */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="font-heading text-3xl sm:text-4xl text-teal-dark text-center mb-16">
              Me contacter
            </h2>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-heading text-lg text-teal-dark mb-2">
                  Adresse
                </h3>
                <p className="text-text-light text-sm">
                  35 quai du Pré Long
                  <br />
                  Lagny sur Marne 77400
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-teal-dark mb-2">
                  Contact
                </h3>
                <p className="text-text-light text-sm">
                  <a
                    href="tel:0656666314"
                    className="hover:text-teal transition-colors"
                  >
                    06 56 66 63 14
                  </a>
                  <br />
                  <a
                    href="mailto:jeanne.neuropsy@gmail.com"
                    className="hover:text-teal transition-colors"
                  >
                    jeanne.neuropsy@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg text-teal-dark mb-2">
                  Heures d&apos;ouverture
                </h3>
                <p className="text-text-light text-sm">
                  Mercredi
                  <br />9 h30 - 17 h30
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-2 gap-12">
            <RevealOnScroll>
              <div className="space-y-8">
                <div className="text-sm text-text-light space-y-4">
                  <p className="inline-block bg-amber-light/50 text-amber-dark px-4 py-2 rounded-lg font-medium">
                    Cabinet LGBTQIA+ friendly
                  </p>

                  <p>
                    Pour réserver une séance, vous pouvez me contacter par mail.
                    Merci de préciser le motif de votre demande et vos
                    coordonnées (téléphone et mail).
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    <p>
                      Les séances de psychothérapie ne sont pas adaptées aux
                      situations d&apos;urgence.
                      <br />
                      Dans ce cas, faites le{" "}
                      <strong>15</strong> ou le{" "}
                      <strong>3114</strong> (numéro national de prévention du
                      suicide).
                    </p>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-heading text-lg text-teal-dark mb-4">
                      Modalités pratiques pour les séances
                    </h4>

                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-text text-sm">
                          Retard
                        </h5>
                        <p className="text-sm">
                          En cas de retard, je vous invite à me prévenir dès que
                          possible au{" "}
                          <a
                            href="tel:0656666314"
                            className="text-teal hover:underline"
                          >
                            0656666314
                          </a>{" "}
                          ou{" "}
                          <a
                            href="mailto:jeanne.neuropsy@gmail.com"
                            className="text-teal hover:underline"
                          >
                            jeanne.neuropsy@gmail.com
                          </a>
                        </p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-text text-sm">
                          Annulation
                        </h5>
                        <p className="text-sm">
                          En cas d&apos;annulation prévisible en avance, il est
                          nécessaire de m&apos;en tenir informée le plus tôt
                          possible au 0656666314 ou{" "}
                          <a
                            href="mailto:jeanne.neuropsy@gmail.com"
                            className="text-teal hover:underline"
                          >
                            jeanne.neuropsy@gmail.com
                          </a>{" "}
                          afin de gérer au mieux l&apos;organisation des RDV et
                          de proposer le créneau à une autre personne. Les
                          annulations doivent cependant rester exceptionnelles,
                          merci de votre compréhension.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200}>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5!2d2.7096!3d48.8739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e61476c3e0e5e7%3A0x4a5c0ec0f1b9e22e!2s35%20Quai%20du%20Pr%C3%A9%20Long%2C%2077400%20Lagny-sur-Marne!5e0!3m2!1sfr!2sfr!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Cabinet de Jeanne Gontier - 35 quai du Pré Long, Lagny-sur-Marne"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
