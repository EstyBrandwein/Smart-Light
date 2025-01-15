import React from 'react';
import '../css/About.css'; 
const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">אודות חברת SMART LIGHT</h1>
      <p className="about-intro">
        ברוכים הבאים ל-SMART LIGHT – הבחירה הנבונה לעיצוב התאורה שלכם!
      </p>
      <p className="about-description">
        חברת SMART LIGHT, בבעלות חנה איינורן, מתמחה בייעוץ תאורה מקצועי וברכישת גופי תאורה בהתאמה אישית לכל חלל ומטרה. אנו מביאים ניסיון, ידע ואהבה לעולם התאורה, מתוך מחויבות ליצור עבורכם סביבה מוארת ונעימה שמשדרגת את איכות החיים שלכם.
      </p>
      <h2 className="about-subtitle">החזון שלנו</h2>
      <p className="about-text">
        אנו ב-SMART LIGHT מאמינים שלתאורה יש תפקיד מרכזי בעיצוב חללים ובהשפעה על האווירה שבהם. לכן, אנו פועלים במקצועיות ובמסירות כדי להעניק לכם פתרונות תאורה מתקדמים המותאמים בדיוק לצרכים שלכם, תוך דגש על עיצוב ייחודי, פרקטיות, וחיסכון באנרגיה.
      </p>
      <h2 className="about-subtitle">מה מייחד אותנו?</h2>
      <ul className="about-list">
        <li><strong>ייעוץ אישי ומקצועי:</strong> כל לקוח מקבל ליווי צמוד משלב הרעיון ועד להשלמת הפרויקט, עם התחשבות מלאה בסגנון, בתקציב ובדרישות הייחודיות שלו.</li>
        <li><strong>מבחר איכותי של גופי תאורה:</strong> אנו מציעים מגוון רחב של גופי תאורה מודרניים, קלאסיים וטכנולוגיים, המתאימים לבית, למשרד ולשטחים מסחריים.</li>
        <li><strong>תשומת לב לפרטים:</strong> אנו שמים דגש על עיצוב הרמוני ואסתטי, המשלב פונקציונליות ונוחות.</li>
        <li><strong>שירות בסטנדרטים גבוהים:</strong> אצלנו, שביעות רצונכם היא בראש סדר העדיפויות.</li>
      </ul>
      <p className="about-closing">
        בואו להאיר את עולמכם עם SMART LIGHT, המקום שבו תאורה הופכת לאמנות. נשמח לעמוד לשירותכם ולהאיר עבורכם את הדרך!
      </p>
    </div>
  );
};

export default About;
