import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );

// registerServiceWorker();

// const fFormatName = oUser => {
//   return oUser.firstName + " " + oUser.lastName;
// }

// const fHello = oUser => {
//   if (oUser) {
//     return <h1>Hello, {fFormatName(oUser)}!</h1>;
//   }
//   return <h1>Hello, Stranger.</h1>;
// }

// const fTime = x => {
//   const sElement = (
//     <div>
//       <h1>Hello, world !</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     sElement,
//     document.getElementById('root')
//   )
// }
//
//
// const oUser = {
//   firstName: "Thomas",
//   lastName: "Guillet",
//   avatar: "https://scontent-sea1-1.cdninstagram.com/t51.2885-19/s150x150/13534248_1120422754688763_1669686960_a.jpg"
// };
//
// const sAvatar = <img src={oUser.avatar} />;
//
// const Bonjour = info => {
//   return <h1>Salut, {info.name}</h1>;
// }
//
// const element = <Bonjour name="Thomas" />;

// const element = (
//   <h1>
//     {fHello(oUser)}
//     {sAvatar}
//   </h1>
// );
//
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world !'
// );
// setInterval(fTime, 1000);
function formatDate(date) {
  return date.toLocaleDateString();
}

const Avatar = info => {
  return <img className="Avatar" src={info.createur.avatar} alt={info.createur.nom} />
}

const InfoUtilisateur = info => {
  return (
    <div className="InfoUtilisateur">
      <Avatar createur={info.createur} />
      <div className="InfoUtilisateur-Name">
        {info.createur.nom}
      </div>
    </div>
  );
}

const Commentaire = info => {
  return (
    <div className="Commentaire">
      <div className="Utilisateur">
        <InfoUtilisateur createur={info.auteur} />
      </div>
      <div className="Commentaire-contenu">
        {info.contenu}
      </div>
      <div className="Commentaire-date">
        {formatDate(info.date)}
      </div>
    </div>
  )
}

const Utilisateur = {
  nom: 'Thomas',
  avatar: 'https://scontent-sea1-1.cdninstagram.com/t51.2885-19/s150x150/13534248_1120422754688763_1669686960_a.jpg'
}

const element = <Commentaire contenu='Trop bien !' date={new Date()} auteur={Utilisateur} />






ReactDOM.render(
  element,
  document.getElementById('root')
);
