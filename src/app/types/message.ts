export enum MessageStatus {
  New = "Nouveau", // Le message vient d'être soumis
  InProgress = "En attente", // Le message est en cours de traitement
  Replied = "Répondu", // Une réponse a été envoyée
  Closed = "Clôturé", // Le message a été traité et clôturé
  Archived = "Archivé", // Le message est archivé
  AwaitingInfo = "En attente d'infos", // En attente d'informations supplémentaires de l'utilisateur
  Rejected = "Rejeté", // Le message a été rejeté
  Spam = "Spam", // Le message a été marqué comme spam
  HighPriority = "Priorité", // Le message est à traiter en priorité
}
