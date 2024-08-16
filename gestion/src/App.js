import React, { useState } from "react";

export default function App() {
 const questions = [
   {
     questionText:
       "Lequel des pays suivants n’a pas un Président élu pour un quinquennat ?",
     answerOptions: [
       { answerText: "Les États-Unis", isCorrect: true },
       { answerText: "La Grèce", isCorrect: false },
       { answerText: "La Pologne", isCorrect: false },
       { answerText: "Le Portugal", isCorrect: false },
     ],
   },
   {
     questionText: "Le plus haut gratte-ciel du monde se trouve à :",
     answerOptions: [
       { answerText: "Chicago", isCorrect: false },
       { answerText: "Dubaï", isCorrect: true },
       { answerText: "Shanghai", isCorrect: false },
       { answerText: "La Mecque", isCorrect: false },
     ],
   },
   {
     questionText: "Le signe ALENA correspond en anglais à :",
     answerOptions: [
       { answerText: "NAFTA", isCorrect: true },
       { answerText: "NATO", isCorrect: false },
       { answerText: "IMF", isCorrect: false },
       { answerText: "IBRD", isCorrect: false },
     ],
   },
   {
     questionText: "Lequel des pays suivants ne fait pas partie du G7 :",
     answerOptions: [
       { answerText: "Le Japon", isCorrect: false },
       { answerText: "La France", isCorrect: false },
       { answerText: "Le Canada", isCorrect: false },
       { answerText: "La Russie", isCorrect: true },
     ],
   },
   {
     questionText: "Les États-Unis sont composés de … États :",
     answerOptions: [
       { answerText: "40", isCorrect: false },
       { answerText: "45", isCorrect: false },
       { answerText: "50", isCorrect: true },
       { answerText: "55", isCorrect: false },
     ],
   },
   {
     questionText: "En 2023, le FIDADOC d’Agadir réalise sa :",
     answerOptions: [
       { answerText: "14ème édition", isCorrect: true },
       { answerText: "15ème édition", isCorrect: false },
       { answerText: "16ème édition", isCorrect: false },
       { answerText: "17ème édition", isCorrect: false },
     ],
   },
   {
     questionText: "Lequel de ces auteurs n’est pas marocain :",
     answerOptions: [
       { answerText: "Tahar ben Jelloun", isCorrect: false },
       { answerText: "Driss Chraïbi", isCorrect: false },
       { answerText: "Yasmina Khadra", isCorrect: true },
       { answerText: "Fouad Laroui", isCorrect: false },
     ],
   },
   {
     questionText:
       "Le Musée Mohammed VI d'art moderne et contemporain a été inauguré en ?",
     answerOptions: [
       { answerText: "2013", isCorrect: false },
       { answerText: "2014", isCorrect: true },
       { answerText: "2015", isCorrect: false },
       { answerText: "2016", isCorrect: false },
     ],
   },
   {
     questionText: "En quelle année l'esclavage est-il aboli en France ?",
     answerOptions: [
       { answerText: "1789", isCorrect: false },
       { answerText: "1790", isCorrect: false },
       { answerText: "1818", isCorrect: false },
       { answerText: "1848", isCorrect: true },
     ],
   },
   {
     questionText:
       "Le premier footballeur marocain qui a reçu le trophée du ballon d'or africain ?",
     answerOptions: [
       { answerText: "Mohamed Timoumi", isCorrect: false },
       { answerText: "Ahmed Faras", isCorrect: true },
       { answerText: "Badou Zaki", isCorrect: false },
       { answerText: "Laarbi Ben Barka", isCorrect: false },
     ],
   },
   {
     questionText: "En quelle année le roi Mohamed V fut exilé à Madagascar",
     answerOptions: [
       { answerText: "1952", isCorrect: false },
       { answerText: "1953", isCorrect: false },
       { answerText: "1954", isCorrect: true },
       { answerText: "1955", isCorrect: false },
     ],
   },
   {
     questionText: "Quel est l’équivalent d’Amazon en Chine ?",
     answerOptions: [
       { answerText: "Alibaba", isCorrect: true },
       { answerText: "Baidu", isCorrect: false },
       { answerText: "Tencent", isCorrect: false },
       { answerText: "Xiaomi", isCorrect: false },
     ],
   },
   {
     questionText:
       "Qui a été premier ministre du Royaume-Uni entre 2016-2019 avec pour mission de mener le Brexit",
     answerOptions: [
       { answerText: "Theresa May", isCorrect: true },
       { answerText: "Amber Rudd", isCorrect: false },
       { answerText: "Margaret Thatcher", isCorrect: false },
       { answerText: "Nicola Sturgeon", isCorrect: false },
     ],
   },
   {
     questionText: "« Être ou ne pas être » cette phrase emblématique est de :",
     answerOptions: [
       { answerText: "Emile Zola", isCorrect: false },
       { answerText: "Honoré de Balzac", isCorrect: false },
       { answerText: "Victor Hugo", isCorrect: false },
       { answerText: "William Shakespeare", isCorrect: true },
     ],
   },
   {
     questionText: "Le protocole de Kyoto a pour but ",
     answerOptions: [
       { answerText: "protection des enfants", isCorrect: false },
       { answerText: "protection des animaux", isCorrect: false },
       { answerText: "protection de l’environnement", isCorrect: true },
       { answerText: "protection de la faune", isCorrect: false },
     ],
   },
   {
     questionText: "Dans quel pays seront organisés les JO 2024 ?",
     answerOptions: [
       { answerText: "USA", isCorrect: false },
       { answerText: "Canada", isCorrect: false },
       { answerText: "Mexique", isCorrect: false },
       { answerText: "France", isCorrect: true },
     ],
   },
   {
     questionText: "Le siège de l’OTAN se trouve à :",
     answerOptions: [
       { answerText: "Paris", isCorrect: false },
       { answerText: "Bruxelles", isCorrect: true },
       { answerText: "Berlin", isCorrect: false },
       { answerText: "Madrid", isCorrect: false },
     ],
   },
   {
     questionText:
       "Quel indicateur a été développé par le Programme des Nations Unies pour le Développement, pour mesurer le bien-être individuel ou collectif ?",
     answerOptions: [
       { answerText: "Le Produit Intérieur Brut", isCorrect: false },
       { answerText: "Le Bonheur National Brut", isCorrect: false },
       { answerText: "IDH", isCorrect: true },
       { answerText: "INDH", isCorrect: false },
     ],
   },
   {
     questionText:
       "Quel est l'organisme des Nations Unies qui prend en charge les questions liées à l'agriculture ?",
     answerOptions: [
       { answerText: "FMI", isCorrect: false },
       { answerText: "CAO", isCorrect: false },
       { answerText: "FAO", isCorrect: true },
       { answerText: "NAO", isCorrect: false },
     ],
   },
   {
     questionText: "En quel mois est né le prophète Mohammed ?",
     answerOptions: [
       { answerText: "Mouharram", isCorrect: false },
       { answerText: "Rabia al-awwal", isCorrect: true },
       { answerText: "Safar", isCorrect: false },
       { answerText: "Rabia ath-thani", isCorrect: false },
     ],
   },
   {
     questionText:
       "Parmi ces publications, une seule est un hebdomadaire. Laquelle ?",
     answerOptions: [
       { answerText: "La Vie Eco", isCorrect: true },
       { answerText: "L’Économiste", isCorrect: false },
       { answerText: "Le Matin", isCorrect: false },
       { answerText: "Le Soir", isCorrect: false },
     ],
   },
   {
     questionText:
       "Parmi les sources d'énergie suivantes, laquelle est renouvelable ?",
     answerOptions: [
       { answerText: "Charbon", isCorrect: false },
       { answerText: "Gaz", isCorrect: false },
       { answerText: "Pétrole", isCorrect: false },
       { answerText: "Vent", isCorrect: true },
     ],
   },
   {
     questionText: "L'ONU a succédé à quelle organisation ?",
     answerOptions: [
       { answerText: "La Société des Nations", isCorrect: true },
       {
         answerText:
           "L'Organisation des Nations Unies pour l'Alimentation et l'Agriculture",
         isCorrect: false,
       },
       { answerText: "La Banque Mondiale", isCorrect: false },
       {
         answerText: "L'Organisation Internationale du Travail",
         isCorrect: false,
       },
     ],
   },
 ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
