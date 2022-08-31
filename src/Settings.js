import slon_img from "./assets/img/slon.jpg";

const Settings = () => {
	return (
		<div className="row">
      <div className="col-8">
        <h2>Тест</h2>
              <section
                style={{ backgroundImage: `url(${slon_img})`, width: "480px", height: "320px" }}
              ></section>
            </div>
      </div>
	);
};

export default Settings;