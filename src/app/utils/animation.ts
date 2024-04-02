import { AnimationTriggerMetadata, animate, animation, style, transition, trigger, useAnimation } from '@angular/animations'

const rotateAnimation = animation([
    style({
        transform: '{{ transform }}'
    }),
    animate('{{ time }}'),
])

const rotateAnimations: { [Symbol.iterator]: () => Iterator<AnimationTriggerMetadata>, [key: string]: AnimationTriggerMetadata } = {
    [Symbol.iterator]: function* () {
        yield* Object.values(rotateAnimations)
    },
};

(() => {
    [0, 1, 2].forEach((i) => {
        rotateAnimations[`triggerAnimation${i*45}`] = trigger('openClose', [
            transition('open => closed', [
                useAnimation(rotateAnimation, {
                    params: {
                        transform: `rotate(${i * 45}deg)`,
                        time: '1s',
                    },
                }),
            ]),
        ])
    })
})()

export default rotateAnimations