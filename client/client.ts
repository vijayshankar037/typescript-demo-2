import {Question} from "../@types/Question";

((): void =>{
  let questions: Question[] =[];

  function render(): void {
    document.getElementById("Questions").innerHTML = questions.map(({title, content }) => `
      <li class="list-group-item d-flex justfy-content-between 1h-condensed">
        <div>
          <h6 class="my-0">
            ${title}
          </h6>
          <small class="text-muted">
            ${content}
          </small>
        </div>
      </li>
    `).join("");
  }

  async function init() :Promise<void>{
    const request = await fetch('/questions');
    questions = await request.json();
    console.log(questions);
    render();
  }
  init();
})();