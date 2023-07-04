/// <reference types="cypress"/>

import FeedbackPage from "../support/pages/FeedbackPage";

const feedbackPage = new FeedbackPage();


it('Customer Feedback success', () => {
  feedbackPage.open();
  feedbackPage.openFeedback();
  feedbackPage.addComment();
  feedbackPage.addRaiting();
  feedbackPage.captchaResult();
  feedbackPage.submitButton();
});

it('Customer Feedback failed', () => {
  feedbackPage.open();
  feedbackPage.openFeedback();
  feedbackPage.addComment();
  feedbackPage.addRaiting();
  feedbackPage.wrongResultCaptcha();

});