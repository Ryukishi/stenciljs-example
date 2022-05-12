import { Component, h, Host, Prop, State } from '@stencil/core';

@Component({
  tag: 'poc-button',
  styleUrl: 'poc-button.css',
  shadow: true,
})
export class PocButton {
  /**
   * primary | secondary
   * @returns the button variant
   */
  @Prop() variant: 'primary' | 'secondary' | 'outlined' | 'text' = 'primary';

  /**
   * button | submit
   * @returns the button type
   */
  @Prop() type: 'button' | 'submit' = 'button';

  /**
   * small | medium | large
   * @returns the button size
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * state variable to store the count
   * @returns the pressed count
   */
  @State() counter = 1;

  /**
   * increments the previous count value
   * @returns the incremented pressed count
   */
  // handleClick = () => {
  //   this.counter = this.counter + 1;
  // }

  render() {
    return (
      <Host>
      <button class={`btn btn-${this.variant} ${this.type} ${this.size}`}>
        <slot></slot>
      </button>
      </Host>
    );
  }

}
