import { LitElement, html, customElement, property } from 'lit-element';

@customElement('my-cat')
export class MyCat extends LitElement {
  @property({type : String})  name = 'Tom';
  @property({type : Number})  legs = 4;
  @property({type : Boolean}) nice = true;
  @property({type : Array})   alias = ['good kitty','muchi muchi', 'mice slayer'];
  @property({type : Object})  skills = { karate: 'white belt', english:'native' };

  render() {
    return html`
      <p>name: ${this.name}</p>
      <p>legs: ${this.legs}</p>
      <p>nice: ${this.nice}</p>
      <p>alias: 
        <ul>
       ${this.alias.map((item, index) =>
        html`<li>[${index}]:${item}&nbsp;</li>`)}
       </ul>
      </p>
        <p>skills:
        <ul>
        ${Object.keys(this.skills).map(item =>
          html`<li>${item}: ${this.skills[item]}&nbsp;</li>`)}
        </ul>
      </p>
      <p>skills.karate: ${this.skills.karate}</p>
    `;
  }
}
