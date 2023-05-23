const faqData = [
  {
    id: 1,
    question: 'Who are we?',
    answer:
      'We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.',
  },
  {
    id: 2,
    question: 'What do we do?',
    answer:
      'Building learning communities with Our Affordable & Competent Courses',
  },
  {
    id: 3,
    question: 'Are the community classes boring?',
    answer: 'No, not at all!!!',
  },
];

const accordianBody = document.querySelector('.accordian_body');
const faqs = [];

function createFaq() {
  faqData.forEach(el => {
    const html = `
    <div class="faq">
      <div class="faq_header">
        <h3>${el.question}</h3>
        <button class="show_btn" data-id=${el.id}>+</button>
      </div>
      <p class="text hidden" data-id=${el.id}>${el.answer}</p>
    </div>`;

    faqs.push(html);
  });
}

function showFaq() {
  createFaq();
  const markup = faqs.join();
  accordianBody.insertAdjacentHTML('beforeend', markup);
  // accordianBody.innerHTML = markup;
}
showFaq();

function btnStatusUpdate() {
  document.querySelectorAll('.show_btn').forEach(el => {
    el.addEventListener('click', function (e) {
      const text = document.querySelectorAll('.text');

      text.forEach(el => {
        // Showing hidden answer
        if (e.target.dataset.id === el.dataset.id) {
          el.classList.toggle('hidden');
        } else {
          el.classList.add('hidden');
        }
      });
    });
  });
}
btnStatusUpdate();
