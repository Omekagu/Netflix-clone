import React from 'react';
import FaqItem from './FaqItems/FaqItem';
import Input from './Input/Input';

const Faq = () => {
  return (
    <section className="faq">
      <h1 className="faq__title">Frequently Asked Questions</h1>
      <div>
        <ul>
          <FaqItem className="faq__list" text="what is netflix?" />
          <FaqItem className="faq__list" text="how much does netflix cost?" />
          <FaqItem className="faq__list" text="where can i watch netflix?" />
          <FaqItem className="faq__list" text="How do i cancel?" />
          <FaqItem className="faq__list" text="what can i watch on netflix?" />
          <FaqItem className="faq__list" text="is netflix good for kids" />
        </ul>
      </div>
      <Input className="faq--input" />
    </section>
  );
};
export default Faq;
