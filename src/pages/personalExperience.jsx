const DRIVE_FILE_ID = "1KwranhG3JZ2nF9Zsn5RevjsDzGAQIt_P";

function getVideoSrc() {
  return `https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`;
}

export default function PersonalExperience() {
  return (
    <div className="page">
      <h2>Experiencia Personal</h2>
      <p>
        Video explicando mi experiencia al realizar esta tarea
      </p>
      <div className="video-wrapper">
        <iframe
          src={getVideoSrc()}
          title="Experiencia personal"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
