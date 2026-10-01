const NAME = "Ana Zuleica";
const LASTNAME = "Santana González";
const EMAIL = "20242153@itla.edu.do";

let photoUrl;
try {
  photoUrl = new URL("../assets/photo_perfil.jpeg", import.meta.url).href;
} catch {
  photoUrl = null;
}

export default function Home() {
  return (
    <div className="page">
      <h2>Pagina Inicial</h2>
      <div className="home-card">
        <img
          src={photoUrl}
          alt="Foto 2x2"
          className="foto-2x2"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="home-data">
          <p><strong>Nombre:</strong> {NAME}</p>
          <p><strong>Apellido:</strong> {LASTNAME}</p>
          <p><strong>Correo:</strong> {EMAIL}</p>
        </div>
      </div>
    </div>
  );
}
