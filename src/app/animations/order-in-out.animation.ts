import { animate, style, transition, trigger } from "@angular/animations";

export function orderInOutAnimation(duration: number) {
  return trigger("orderInOut", [
    transition(":enter", [
      style({
        transform: "translateY(20px)",
        opacity: 0,
      }),
      animate(
        `${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`,
        style({
          transform: "translateY(0)",
          opacity: 1,
        })
      ),
    ]),
    transition(":leave", [
      animate(
        `${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`,
        style({
          transform: "translateY(20px)",
          opacity: 0,
        })
      ),
    ]),
  ]);
}

export const orderInOut500ms = orderInOutAnimation(500);
