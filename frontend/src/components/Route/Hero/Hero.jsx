import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 900px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600]`}
        >
          {/* Best Collection for <br /> home Decoration */}
          Meilleure collection pour <br /> la décoration de la maison
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">

        {/* Transform your space with our exceptional selection for unique and elegant interior design.{" "} <br />
        Find inspiration among current decorating trends to enhance your. <br />
        Start your journey to a more beautiful home with our exclusive home decor collection. */}

        Transformez votre espace avec notre sélection exceptionnelle pour un design intérieur unique et élégant. 
        Trouvez l'inspiration parmi les tendances déco actuelles pour sublimer votre maison. 
        Commencez votre voyage vers une maison plus belle avec notre collection exclusive de décoration d'intérieur.
        </p>
        <Link to="/products" className="inline-block">
            <div className={`${styles.button} mt-5`}>
                 <span className="text-[#fff] font-[Poppins] text-[14px]">
                    {/* Shop Now */}
                    Achetez maintenant
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
