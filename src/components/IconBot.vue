<script setup lang="ts">
import { toRefs } from 'vue'
const props = withDefaults(
  defineProps<{
    useFor: 'active' | 'delete'
  }>(),
  { useFor: 'active' },
)
const { useFor } = toRefs(props)
</script>

<template>
  <svg
    viewBox="0 0 678 678"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="mx-auto w-full cursor-pointer"
    :class="useFor === 'active' ? 'text-note group' : 'text-error'"
  >
    <g
      class="animate origin-center opacity-40"
      :class="
        useFor === 'active'
          ? 'group-hover:text-main group-hover:animate-spin'
          : 'animate-[telescopic_1s_ease-in-out_infinite]'
      "
    >
      <rect
        x="208.645"
        y="296.014"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-45 208.645 296.014)"
        fill="currentColor"
      />
      <rect
        x="175.344"
        y="262.714"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-45 175.344 262.714)"
        fill="currentColor"
      />
      <rect
        x="142.044"
        y="229.413"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-45 142.044 229.413)"
        fill="currentColor"
      />
      <rect
        x="271.321"
        y="233.339"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-45 271.321 233.339)"
        fill="currentColor"
      />
      <rect
        x="238.02"
        y="200.038"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-45 238.02 200.038)"
        fill="currentColor"
      />
      <rect
        x="204.72"
        y="166.737"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-45 204.72 166.737)"
        fill="currentColor"
      />
      <rect
        x="223.755"
        y="248.448"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-45 223.755 248.448)"
        fill="currentColor"
      />
      <rect
        x="190.454"
        y="215.147"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-45 190.454 215.147)"
        fill="currentColor"
      />
      <rect
        x="157.153"
        y="181.847"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-45 157.153 181.847)"
        fill="currentColor"
      />
      <rect
        x="469.93"
        y="381.408"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(135 469.93 381.408)"
        fill="currentColor"
      />
      <rect
        x="503.23"
        y="414.709"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(135 503.23 414.709)"
        fill="currentColor"
      />
      <rect
        x="536.533"
        y="448.011"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(135 536.533 448.011)"
        fill="currentColor"
      />
      <rect
        x="407.254"
        y="444.084"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(135 407.254 444.084)"
        fill="currentColor"
      />
      <rect
        x="440.555"
        y="477.385"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(135 440.555 477.385)"
        fill="currentColor"
      />
      <rect
        x="473.857"
        y="510.687"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(135 473.857 510.687)"
        fill="currentColor"
      />
      <rect
        x="454.82"
        y="428.975"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(135 454.82 428.975)"
        fill="currentColor"
      />
      <rect
        x="488.122"
        y="462.275"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(135 488.122 462.275)"
        fill="currentColor"
      />
      <rect
        x="521.423"
        y="495.577"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(135 521.423 495.577)"
        fill="currentColor"
      />
      <rect
        x="381.825"
        y="208.485"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(45 381.825 208.485)"
        fill="currentColor"
      />
      <rect
        x="415.126"
        y="175.184"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(45 415.126 175.184)"
        fill="currentColor"
      />
      <rect
        x="448.426"
        y="141.884"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(45 448.426 141.884)"
        fill="currentColor"
      />
      <rect
        x="444.501"
        y="271.161"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(45 444.501 271.161)"
        fill="currentColor"
      />
      <rect
        x="477.802"
        y="237.86"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(45 477.802 237.86)"
        fill="currentColor"
      />
      <rect
        x="511.102"
        y="204.56"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(45 511.102 204.56)"
        fill="currentColor"
      />
      <rect
        x="429.391"
        y="223.595"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(45 429.391 223.595)"
        fill="currentColor"
      />
      <rect
        x="462.692"
        y="190.294"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(45 462.692 190.294)"
        fill="currentColor"
      />
      <rect
        x="495.993"
        y="156.993"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(45 495.993 156.993)"
        fill="currentColor"
      />
      <rect
        x="296.432"
        y="469.771"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-135 296.432 469.771)"
        fill="currentColor"
      />
      <rect
        x="263.131"
        y="503.071"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-135 263.131 503.071)"
        fill="currentColor"
      />
      <rect
        x="229.829"
        y="536.373"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-135 229.829 536.373)"
        fill="currentColor"
      />
      <rect
        x="233.755"
        y="407.095"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-135 233.755 407.095)"
        fill="currentColor"
      />
      <rect
        x="200.455"
        y="440.395"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-135 200.455 440.395)"
        fill="currentColor"
      />
      <rect
        x="167.153"
        y="473.697"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-135 167.153 473.697)"
        fill="currentColor"
      />
      <rect
        x="248.865"
        y="454.661"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-135 248.865 454.661)"
        fill="currentColor"
      />
      <rect
        x="215.564"
        y="487.961"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-135 215.564 487.961)"
        fill="currentColor"
      />
      <rect
        x="182.263"
        y="521.263"
        width="35.3211"
        height="35.3211"
        rx="10"
        transform="rotate(-135 182.263 521.263)"
        fill="currentColor"
      />
    </g>
    <g
      class="animate origin-center"
      :class="
        useFor === 'active'
          ? 'group-hover:text-main group-hover:animate-[zoom_1s_ease-in-out]'
          : 'animate-[shake_0.5s_ease-in-out_infinite]'
      "
    >
      <path
        d="M493 339C493 424.604 423.828 494 338.5 494C253.172 494 184 424.604 184 339C184 253.396 253.172 184 338.5 184C423.828 184 493 253.396 493 339Z"
        fill="white"
      />
      <path
        d="M477 339C477 415.768 414.991 478 338.5 478C262.009 478 200 415.768 200 339C200 262.232 262.009 200 338.5 200C414.991 200 477 262.232 477 339Z"
        fill="currentColor"
      />
      <path
        d="M304 339C304 355.016 291.016 368 275 368C258.984 368 246 355.016 246 339C246 322.984 258.984 310 275 310C291.016 310 304 322.984 304 339Z"
        fill="white"
      />
      <path
        d="M432 339C432 355.016 419.016 368 403 368C386.984 368 374 355.016 374 339C374 322.984 386.984 310 403 310C419.016 310 432 322.984 432 339Z"
        fill="white"
      />
    </g>
  </svg>
</template>
