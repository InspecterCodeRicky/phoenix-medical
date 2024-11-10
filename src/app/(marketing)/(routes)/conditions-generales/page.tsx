"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const CGV = () => {
  const data = useQuery(api.mentionsLegales.list);

  const mention = useQuery(api.mentionsLegales.getById, {
    mentionsId: data ? (data![0] || {})._id : "",
  });

  if (mention == undefined || mention == null) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="text-4xl font-bold mb-8">{mention.title}</h1>
      <div
        className="text-sm"
        dangerouslySetInnerHTML={{ __html: mention.text }}
      />
    </div>
    // <div className="container mt-5">
    //   <h1 className="text-4xl font-bold text-center mb-8">
    //     Conditions Générales de Vente
    //   </h1>
    //   <div className="space-y-6">
    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 1 – DEFINITIONS
    //       </h2>
    //       <p className="text-gray-700">
    //         Les termes définis ci-après auront les significations suivantes dans
    //         les présentes conditions générales de vente et de prestations :
    //       </p>
    //       <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700">
    //         <li>
    //           <strong>Client :</strong> désigne tout professionnel qui procède à
    //           l’achat de Matériel(s) et de Prestations à des fins entrant dans
    //           le cadre de son activité professionnelle et privée.
    //         </li>
    //         <li>
    //           <strong>Conditions Générales :</strong> désignent les présentes
    //           conditions générales de vente de Matériels et de Prestations.
    //         </li>
    //         <li>
    //           <strong>Produit(s) :</strong> désigne les matériels ergonomiques
    //           commercialisés en magasin et via le Site.
    //         </li>
    //         <li>
    //           <strong>Prestations :</strong> désigne les prestations de conseil
    //           à l’installation et à l’utilisation des Produits réalisés sur site
    //           de travail ou chez le Client.
    //         </li>
    //         <li>
    //           <strong>Site :</strong> désigne le site web accessible à l’adresse
    //           en cours et édité par PHOENIX MEDICAL.
    //         </li>
    //         <li>
    //           <strong>Partie(s) :</strong> désigne séparément ou conjointement
    //           PHOENIX MEDICAL et le Client.
    //         </li>
    //         <li>
    //           <strong>PHOENIX MEDICAL :</strong> Société anonyme à conseil
    //           d'administration, représentée par M. Angelica LACROIX.
    //         </li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 2 – CHAMP D’APPLICATION DES CONDITIONS GENERALES
    //       </h2>
    //       <p className="text-gray-700">
    //         Les présentes conditions générales d’utilisation sont conclues pour
    //         une durée indéterminée. L’entreprise PHOENIX MEDICAL se réserve le
    //         droit de modifier les clauses de ces conditions générales
    //         d’utilisation à tout moment et sans justification.
    //       </p>
    //       <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700">
    //         <li>
    //           2.1 Le Client déclare procéder à la commande de Produit(s) et, le
    //           cas échéant, de Prestations sur le Site à des fins entrant dans le
    //           cadre de son activité professionnelle et (ii) ne pas agir en tant
    //           que consommateur ou non-professionnels au sens de la
    //           réglementation applicable.
    //         </li>
    //         <li>
    //           2.2 Les Conditions Générales ont pour objet de définir le cadre
    //           contractuel applicable à l’achat par le Client de Produits et des
    //           Prestations commercialisés par PHOENIX MEDICAL.
    //         </li>
    //         <li>
    //           2.3 Les Conditions Générales forment l’ensemble des stipulations
    //           contractuelles régissant les rapports entre PHOENIX MEDICAL et le
    //           Client qui renonce à se prévaloir de tout autre document
    //           contraire, et notamment des Conditions Générales d’Achat, qui
    //           serait inopposable.
    //         </li>
    //         <li>
    //           2.4 Les achats de Produits et de Prestations réalisés impliquent
    //           l'adhésion sans réserve du Client aux Conditions Générales dont il
    //           a pu librement prendre connaissance préalablement à sa commande.
    //           Le fait pour le Client porte la mention « bon pour accord »
    //           stipule avoir pris connaissance des conditions générales de vente
    //           et de prestations et les accepter » lors de sa commande et de
    //           procéder au règlement du prix de sa commande, en constitue une
    //           acceptation irrévocable, sachant qu’il reconnaît par cet acte
    //           avoir lu et compris les Conditions Générales et les accepter. Les
    //           Conditions Générales peuvent être lues directement sur le Site et
    //           être également envoyées par PHOENIX MEDICAL par courrier
    //           électronique sur simple demande du Client.
    //         </li>
    //         <li>
    //           2.5 Le fait de ne pas exercer, à un moment quelconque, une
    //           prérogative reconnue par les Conditions Générales ou de ne pas
    //           exiger l'application de l'une quelconque des stipulations des
    //           Conditions Générales ne pourra en aucun cas être interprété, ni
    //           comme une modification des Conditions Générales, ni comme une
    //           renonciation expresse ou tacite à ladite prérogative et/ou
    //           stipulation.
    //         </li>
    //         <li>
    //           2.6 Dans l'hypothèse où l'une quelconque des stipulations des
    //           Conditions Générales serait considérée comme illégale ou
    //           inopposable par une décision de justice, les autres stipulations
    //           resteront en vigueur.
    //         </li>
    //         <li>
    //           2.7 Les Conditions Générales peuvent faire l'objet d’adaptations
    //           ou de modifications ultérieures, la version des Conditions
    //           Générales applicable à la commande du Client est celle en vigueur
    //           sur le Site à la date de passation par le Client de la commande
    //           concernée.
    //         </li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 3 – PRODUITS ET PRESTATIONS
    //       </h2>
    //       <p className="text-gray-700">
    //         PHOENIX MEDICAL s'engage à vendre des Produits conformes à la
    //         réglementation et aux normes en vigueur dans l'Union européenne au
    //         moment de la vente.
    //       </p>
    //       <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700">
    //         <li>
    //           3.1 PHOENIX MEDICAL s'engage à vendre des Produits conformes à la
    //           réglementation et aux normes en vigueur dans l'Union européenne au
    //           moment de la vente, mais ne garantit pas une telle conformité à la
    //           réglementation applicable pour les pays en dehors de l’Union
    //           européenne.{" "}
    //         </li>
    //         <li>
    //           3.2 Les caractéristiques essentielles des Produits sont décrites
    //           sur le Site avec la plus grande précision possible et cela,
    //           notamment, grâce à des descriptifs détaillés, des photographies
    //           ainsi que des notices d’utilisation écrites et vidéo.
    //         </li>
    //         <li>
    //           3.3 Le Client déclare expressément (i) avoir pris connaissance de
    //           ces informations avant de sélectionner les Produits choisis et les
    //           Prestations (cf. 3.6 ci-dessous) et (ii) avoir reçu de PHOENIX
    //           MEDICAL toutes les informations déterminantes de son consentement.
    //         </li>
    //         <li>
    //           3.4 Les offres de produits s'entendent dans la limite des stocks
    //           disponibles. À défaut de disponibilité, PHOENIX MEDICAL s'engage à
    //           en informer au plus vite le Client par courrier électronique ou
    //           par téléphone. Le Client a la faculté, en cas d'indisponibilité du
    //           ou des Produit(s) commandé(s), soit d'annuler, soit de modifier sa
    //           commande. En cas d'annulation pour indisponibilité, le Client sera
    //           remboursé dans les meilleurs délais à compter de la réception de
    //           sa demande d'annulation.
    //         </li>
    //         <li>
    //           3.5 Les achats de produits en vue de leur revente sont strictement
    //           interdits.
    //         </li>
    //         <li>
    //           3.6 PHOENIX MEDICAL propose également au Client, exclusivement en
    //           Guadeloupe, Martinique et îles proches, des Prestations de conseil
    //           à l’installation et l’utilisation des Produits également
    //           commercialisées via le Site qui seront réalisées chez le Client
    //           par PHOENIX MEDICAL.
    //         </li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 4 – PASSATION DES COMMANDES
    //       </h2>
    //       <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700">
    //         <li>
    //           4.1 Afin de pouvoir passer des commandes, il sera préalablement
    //           demandé au Client de mentionner sur le devis lié à la commande la
    //           mention « bon pour accord », le Client s’engageant à cette
    //           occasion à valider la commande, et à en préserver l’exactitude.
    //         </li>
    //         <li>
    //           4.2 Toute commande nécessite le parfait achèvement de l’ensemble
    //           des différentes étapes proposées par PHOENIX MEDICAL.
    //         </li>
    //         <li>
    //           4.3 La commande de Produits et le cas échéant de Prestations ne
    //           sera définitivement enregistrée qu'à la validation du devis lié à
    //           la commande par le Client. Cette action est assimilée à la
    //           signature manuscrite visée à l'article 1367 du Code civil. À
    //           compter de cette action la commande est considérée comme
    //           irrévocable pour le Client.
    //         </li>
    //         <li>
    //           4.4 Pour PHOENIX MEDICAL, la commande n'est définitive qu'après
    //           l'envoi au Client de la confirmation de son acceptation par
    //           courrier électronique, laquelle sera envoyée sans délai et après
    //           encaissement d’acompte par PHOENIX MEDICAL de 45% du prix
    //           concerné. Ce courrier électronique de confirmation récapitule
    //           l’ensemble des informations contractuelles et comprend les
    //           Conditions Générales applicables annexées en pièces jointes au
    //           format PDF. Ces documents pourront être conservés, enregistrés et
    //           imprimés par le Client. En conservant ce courrier électronique
    //           et/ou en l'imprimant, le Client détient la preuve de sa commande,
    //           preuve que PHOENIX MEDICAL lui recommande de conserver.
    //         </li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 5 – PRIX, FACTURATION ET PAIEMENT
    //       </h2>
    //       <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700">
    //         <li>
    //           5.1 Les Produits et les Prestations sont fournis aux prix en
    //           vigueur indiqués sur le devis lors de la passation de la commande.
    //           Ces prix sont indiqués en euros et s’entendent frais de livraison
    //           compris, PHOENIX MEDICAL se réservant le droit de modifier ses
    //           prix à tout moment sans préavis.
    //         </li>
    //         <li>
    //           5.2 Les prix définitifs tiennent compte d'éventuelles réductions
    //           qui seraient consenties par PHOENIX MEDICAL et des éventuels codes
    //           promotionnels détenus et renseignés par le Client.
    //         </li>
    //         <li>
    //           5.3 Tout Produit commandé par le Client est facturé par PHOENIX
    //           MEDICAL sur la base du prix définitif et des frais de livraison
    //           indiqués au Client, en fonction du lieu de livraison, lors de
    //           l’achèvement complet du processus de passation de sa commande.
    //         </li>
    //         <li>
    //           5.4 Le paiement de la commande s'entend fractionné en deux partie
    //           ou comptant et s’effectue (i) par cartes bancaires (Carte-Bleue,
    //           Visa, MasterCard) ou (ii) par virement bancaire sur le compte de
    //           PHOENIX MEDICAL.
    //         </li>
    //         <li>
    //           5.5 Le Client est expressément informé du fait qu’aucune commande
    //           ne peut être préparée, ni expédiée, tant que l’acompte de 45% n’ai
    //           été intégralement encaissé par PHOENIX MEDICAL. En cas de refus de
    //           la banque, la commande sera automatiquement annulée.
    //         </li>
    //         <li>
    //           5.6 PHOENIX MEDICAL se réserve de refuser ou d'annuler toute
    //           commande d'un Client situé dans un pays au sein duquel PHOENIX
    //           MEDICAL ne pourrait pas livrer les Produits. PHOENIX MEDICAL se
    //           réserve également le droit de refuser ou d'annuler toute commande
    //           d'un Client avec lequel il existerait un litige relatif au
    //           paiement d'une commande antérieure.
    //         </li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 6 – LIVRAISON DES PRODUITS ET FOURNITURE DES SERVICES
    //       </h2>
    //       <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700">
    //         <li>
    //           6.1 Les Produits seront livrés au Client par PHOENIX MEDICAL ou
    //           par livraison des partenaires de PHOENIX MEDICAL à l’adresse de
    //           livraison indiquée par le Client lors de sa commande.
    //         </li>
    //         <li>
    //           6.2 PHOENIX MEDICAL se réserve la possibilité de procéder à des
    //           livraisons des Produits fractionnés et en informera le Client.
    //         </li>
    //         <li>
    //           6.3 Les délais de livraison des Produits indiqués au Client par
    //           PHOENIX MEDICAL sont purement indicatifs, étant entendu que
    //           l’éventuel non-respect desdits délais ne peut donc donner lieu à
    //           aucune pénalité à la charge de PHOENIX MEDICAL et/ou à
    //           indemnisation du Client à quelque titre que ce soit, ni à aucune
    //           résiliation ou annulation de la commande concernée.
    //         </li>
    //         <li>
    //           6.4 S’agissant des Prestations, elles seront réalisées chez le
    //           Client par l’agence PHOENIX MEDICAL, étant entendu que leurs
    //           modalités de leur réalisation seront déterminées par les Parties
    //           après la passation de la commande.
    //         </li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 7 – DROIT DE RÉTRACTATION
    //       </h2>
    //       <p className="text-gray-700">
    //         Le Client étant un professionnel achetant les Produits et, le cas
    //         échéant, les Prestations via le Site à des fins entrant dans le
    //         cadre de son activité professionnelle, le Client ne bénéficie pas du
    //         droit de rétractation prévu, par l’article L. 221-18 du Code de la
    //         consommation, au seul bénéfice des consommateurs au sens de la
    //         réglementation applicable.
    //       </p>
    //     </section>

    //     {/* Continuez de la même manière pour les articles restants */}

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 8 – RESERVE DE PROPRIETE
    //       </h2>
    //       <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700">
    //         <li>
    //           8.1 PHOENIX MEDICAL CONSERVERA LA PROPRIÉTÉ DES PRODUITS JUSQU’AU
    //           PAIEMENT COMPLET DU PRIX DÛ PAR LE CLIENT, A SAVOIR L’ENCAISSEMENT
    //           EFFECTIF PAR PHOENIX MEDICAL DE LA TOTALITÉ DES FONDS
    //           CORRESPONDANT A LA COMMANDE, ÉTANT ENTENDU QU’EN CAS DE DÉFAUT DE
    //           PAIEMENT À SON ÉCHÉANCE, PHOENIX MEDICAL POURRA REVENDIQUER LES
    //           PRODUITS IMMÉDIATEMENT ET RÉSOUDRE LA COMMANDE/VENTE
    //           CORRESPONDANTE.
    //         </li>
    //         <li>
    //           8.2 CES STIPULATIONS NE FONT PAS OBSTACLE AU TRANSFERT DES RISQUES
    //           SUR LES PRODUITS TEL QUE PRÉVU PAR L’ARTICLE 9 CI-DESSOUS.
    //         </li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 9 – TRANSFERT DES RISQUES
    //       </h2>
    //       <p className="text-gray-700">
    //         Les risques de détérioration des Produits ainsi que tous les
    //         dommages que ces derniers pourraient occasionner sont transférés au
    //         Client lors de leur livraison par le transporteur.
    //       </p>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 10 – RECEPTION DES PRODUITS ET CONFORMITÉ
    //       </h2>
    //       <p className="text-gray-700">
    //         <strong>10.1</strong> Il incombe au Client de vérifier, lors de leur
    //         réception, l’état, les vices apparents, la quantité ainsi que la
    //         conformité des Produits à la commande correspondante passée. Toute
    //         réclamation du Client à ce titre doit être formulée, à peine de
    //         déchéance de toute action s’y rapportant, par tout moyen écrit
    //         adapté dans les quarante-huit (48) heures suivant la réception des
    //         Produits :
    //       </p>
    //       <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700">
    //         <li>
    //           En cas de Produit manquant, et sous réserve que cela ait dûment
    //           été vérifié et constaté par PHOENIX MEDICAL, PHOENIX MEDICAL aura
    //           pour seule obligation, à son libre choix, à l’exclusion de tous
    //           dommages-intérêts ou d’annulation de la commande concernée, (i)
    //           d’expédier à ses frais le(s) Produit(s) manquant(s) ou (ii)
    //           d’établir un avoir pour le montant concerné ;
    //         </li>
    //         <li>
    //           Dans l’hypothèse où des Produits se révéleraient non-conformes, et
    //           sous réserve que cela ait dûment été vérifié et constaté par
    //           PHOENIX MEDICAL après examen des Produits retournés, PHOENIX
    //           MEDICAL aura pour seule obligation à son libre choix, à
    //           l’exclusion de tous dommages-intérêts ou d’annulation de la
    //           Commande concernée (i) de remplacer les Produits non-conformes par
    //           des Produits conformes ou (ii) d’établir un avoir pour le montant
    //           concerné. Quoiqu’il en soit, toute réexpédition par le Client de
    //           Produits prétendument non-conformes devra faire l’objet d’un
    //           accord préalable de la part de PHOENIX MEDICAL, notamment sur la
    //           base d’une analyse des photographies des Produits concernés
    //           adressées par le Client à PHOENIX MEDICAL.
    //         </li>
    //       </ul>
    //       <p className="text-gray-700">
    //         <strong>10.2</strong> Il est entendu que les frais et les risques de
    //         retour des Produits non-conformes seront à la charge d’ PHOENIX
    //         MEDICAL, tout comme la réexpédition des Produits conformes au
    //         Client.
    //       </p>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 11 – GARANTIE LÉGALE SUR LES PRODUITS
    //       </h2>
    //       <p className="text-gray-700">
    //         Dans le cas où le Client est un professionnel de la même spécialité
    //         que PHOENIX MEDICAL, il renonce à l’application de la garantie
    //         contre les vices cachés. Les autres clients bénéficient de la
    //         garantie légale des vices cachés.
    //       </p>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 12 – GARANTIE COMMERCIALE SUR LES PRODUITS
    //       </h2>
    //       <p className="text-gray-700">
    //         Le Client bénéficiera de la garantie légale de conformité établie
    //         par le constructeur de l’article concerné telle que détaillée
    //         ci-dessous.
    //       </p>
    //       <p className="text-gray-700">
    //         La garantie légale de conformité couvre les défauts de conformité :
    //       </p>
    //       <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700">
    //         <li>du bien</li>
    //         <li>de l'emballage</li>
    //         <li>des instructions de montage</li>
    //         <li>
    //           de l'installation lorsque celle-ci a été faite par vous ou
    //           réalisée sous votre responsabilité.
    //         </li>
    //       </ul>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 13 – LIMITATION DE RESPONSABILITÉ DE PHOENIX MEDICAL
    //       </h2>
    //       <p className="text-gray-700">
    //         <strong>13.1</strong> PHOENIX MEDICAL est soumise à une obligation
    //         de moyens pour la réalisation des Prestations, excluant toute
    //         responsabilité pour les dommages indirects.
    //       </p>
    //       <ul className="list-disc ml-5 mt-2 space-y-2 text-gray-700">
    //         <li>
    //           si la responsabilité de PHOENIX MEDICAL doit être engagée au titre
    //           des Prestations, pour quelque cause que ce soit et sur quelque
    //           fondement que ce soit, les dommages et intérêts dont PHOENIX
    //           MEDICAL serait redevables, tous préjudices confondus seront
    //           limités aux sommes versées par le Client à PHOENIX MEDICAL au
    //           titre de la commande litigieuse ; et
    //         </li>
    //         <li>
    //           le Client ne pourra engager la responsabilité de PHOENIX MEDICAL
    //           pour tout dommage de quelque type que ce soit, et notamment tout
    //           dommage direct ou indirect, au titre des Prestations, que dans un
    //           délai d’un (1) an à compter de la survenance du dommage en
    //           question.
    //         </li>
    //       </ul>
    //       <p className="text-gray-700">
    //         <strong>13.2</strong> S’agissant des Produits, il est expressément
    //         convenu entre les Parties que la responsabilité de PHOENIX MEDICAL
    //         ne pourra pas être engagée notamment en cas (i) d’utilisation des
    //         Produits non conforme à leur destination et aux règles de l’art (ii)
    //         de manquement aux dispositions légales/réglementaires (iii) de
    //         non-respect des recommandations d’utilisation des Produits (iv) de
    //         non-respect des notices d’utilisation et (v) de non-respect des
    //         exclusions d’utilisation.
    //       </p>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 14 – PROPRIETE INTELLECTUELLE
    //       </h2>
    //       <p className="text-gray-700">
    //         <strong>14.1</strong> Le nom de domaine du Site, ainsi que
    //         l’ensemble des éléments et contenus figurant sur le Site, sont la
    //         propriété exclusive de PHOENIX MEDICAL et sont protégés, pour le
    //         monde entier, au titre des droits d'auteur et de propriété
    //         intellectuelle. Leur reproduction, même partielle, est strictement
    //         interdite, sauf autorisation préalable et expresse de PHOENIX
    //         MEDICAL. Toute utilisation ou reproduction, même partielle, d’un des
    //         éléments du Site à l’intérieur d’un site tiers par le biais de
    //         procédés dits d’inclusion, de cadres (frames), d’inlining ou de tout
    //         autre procédé de nature similaire sont formellement interdits.
    //       </p>
    //       <p className="text-gray-700">
    //         <strong>14.2</strong> S’agissant des Produits, leur vente par
    //         PHOENIX MEDICAL au Client ne confère à ce dernier aucun droit sur
    //         les éléments de propriété intellectuelle, de quelque type que ce
    //         soit (marques, dessins et modèles, brevets, droits d’auteurs),
    //         afférent aux Produits, et notamment sur les éléments de propriété
    //         intellectuelle dont PHOENIX MEDICAL est titulaire, ni ne donne au
    //         Client le droit de les enregistrer ou de les exploiter/utiliser pour
    //         son propre compte.
    //       </p>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 15 – DONNEES PERSONNELLES / RGPD
    //       </h2>
    //       <p className="text-gray-700">
    //         <strong>15.1</strong> La communication par le Client à PHOENIX
    //         MEDICAL, au moment de la création de son compte Client, de la
    //         passation des commandes de l’enregistrement de la garantie
    //         commerciale, de données à caractère personnel (numéro de téléphone
    //         mobile, numéro de téléphone fixe, prénom et nom, adresse email,
    //         adresse postale) repose son consentement, étant précisé que cette
    //         collecte est indispensable à la bonne exécution des commandes/la
    //         livraison des Produits/la réalisation des Prestations.
    //       </p>
    //       <p className="text-gray-700">
    //         <strong>15.2</strong> Les seuls traitements de ces données
    //         personnelles seront (i) la bonne exécution des commandes/la
    //         livraison des Produits/la réalisation des Prestations et (ii) la
    //         constitution d’un fichier clients aux fins, pour PHOENIX MEDICAL, de
    //         pouvoir réaliser les opérations suivantes : newsletter et e-mailing.
    //       </p>
    //       <p className="text-gray-700">
    //         <strong>15.3</strong> Conformément à la loi n° 78-17 du 6 janvier
    //         1978 ainsi qu’au règlement (UE) 2016/679 du 27 avril 2016 (ci-dessus
    //         et ci-après le « RGPD »), les personnes concernées disposent d’un
    //         droit d’accès, de rectification, de suppression des données à
    //         caractère personnel les concernant ainsi que du droit de définir des
    //         directives relatives au sort de leurs données à caractère personnel
    //         après leur mort. Elles peuvent également s’opposer, pour des motifs
    //         légitimes, au traitement des données les concernant, demander une
    //         limitation du traitement et demander d’exercer leur droit à la
    //         portabilité de leurs données. Les Clients concernés peuvent exercer
    //         tout ou partie de leurs droits en adressant un email à cet effet à
    //         l’adresse email suivante : contact@phoenixmedical.fr.
    //       </p>
    //       <p className="text-gray-700">
    //         <strong>15.4</strong> Les données à caractère personnel collectées
    //         seront conservées par PHOENIX MEDICAL sur le seul territoire
    //         français, exclusivement aux fins de réalisation des traitements
    //         mentionnés ci-dessus, pendant une durée conforme à la réglementation
    //         et aux recommandations de la CNIL à ce titre. PHOENIX MEDICAL
    //         s’interdit de transmettre lesdites données personnelles à tout
    //         tiers, à l’exception de son transporteur et ce uniquement pour
    //         l’exécution de la commande/des Prestations. Les personnes concernées
    //         disposent du droit d’introduire une réclamation auprès de la
    //         Commission Nationale de l’Informatique et des Libertés (CNIL). En
    //         tout état de cause, il est entendu que l’exigence de fourniture des
    //         données personnelles détaillées ci-dessus a un caractère
    //         contractuel, la vente et la livraison des Produits ne pouvant pas
    //         être réalisées en cas de non-communication de ces données.
    //       </p>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 16 – IMPRÉVISION ET FORCE MAJEURE
    //       </h2>
    //       <p className="text-gray-700">
    //         <strong>16.1</strong> En cas de changement de circonstances
    //         imprévisible lors de la conclusion du contrat, conformément aux
    //         dispositions de l'article 1195 du Code civil, la Partie qui n'a pas
    //         accepté d'assumer un risque d'exécution excessivement onéreuse peut
    //         demander une renégociation du contrat à son cocontractant.
    //       </p>
    //       <p className="text-gray-700">
    //         <strong>16.2</strong> Les Parties ne pourront être tenues pour
    //         responsables si la non-exécution ou le retard dans l'exécution de
    //         l'une quelconque de leurs obligations, telles que décrites dans les
    //         présentes découle d'un cas de force majeure, au sens de l'article
    //         1218 du Code civil.
    //       </p>
    //     </section>

    //     <section>
    //       <h2 className="text-2xl font-semibold text-gray-800 mb-4">
    //         ARTICLE 17 – LANGUE, DROIT APPLICABLE ET LITIGES
    //       </h2>
    //       <p className="text-gray-700">
    //         <strong>17.1</strong> Les Conditions Générales sont rédigées en
    //         français dans leur version originale qui seule fait foi et prévaut
    //         sur toute autre version
    //       </p>
    //       <p className="text-gray-700">
    //         <strong>17.2</strong> Le droit français régira seul l’interprétation
    //         et/ou l’exécution des présentes Conditions Générales et des
    //         commandes auxquelles elles s’appliquent.
    //       </p>
    //       <p className="text-gray-700">
    //         <strong>17.3</strong> TOUS LES DIFFÉRENDS RELATIFS À
    //         L'INTERPRÉTATION ET/OU L’EXECUTION DES PRESENTES CONDITIONS
    //         GENERALES ET/OU DES COMMANDES DEVRONT ÊTRE SOUMIS AUX TRIBUNAUX
    //         COMPÉTENTS NONOBSTANT PLURALITE DE DEFENDEURS, APPELS EN GARANTIE OU
    //         PROCEDURE EN REFERE.
    //       </p>
    //     </section>
    //   </div>
    // </div>
  );
};

export default CGV;
