function HideSvg({ show }) {
  return (
    <div className="w-10 h-10">
      {(show) ?
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><path fill="#2B3151" fill-rule="evenodd" d="M32 18.667c-9.728 0-18.023 5.751-21.438 13.851a1.333 1.333 0 1 1-2.457-1.036C11.942 22.382 21.212 16 32 16s20.058 6.382 23.895 15.482a1.333 1.333 0 0 1-2.457 1.036c-3.415-8.1-11.71-13.851-21.438-13.851Z" clip-rule="evenodd"/><path fill="#2B3151" fill-rule="evenodd" d="M32 45.333c-9.728 0-18.023-5.751-21.438-13.851a1.333 1.333 0 1 0-2.457 1.036C11.942 41.618 21.212 48 32 48s20.058-6.382 23.895-15.482a1.333 1.333 0 0 0-2.457-1.036c-3.415 8.1-11.71 13.851-21.438 13.851Z" clip-rule="evenodd"/><path fill="#2B3151" fill-rule="evenodd" d="M32 25.334a6.667 6.667 0 1 0 0 13.333 6.667 6.667 0 0 0 0-13.333ZM22.667 32a9.333 9.333 0 1 1 18.666 0 9.333 9.333 0 0 1-18.666 0Z" clip-rule="evenodd"/><path fill="#2B3151" fill-rule="evenodd" d="M55.61 8.39c.52.521.52 1.365 0 1.886L10.275 55.61a1.333 1.333 0 1 1-1.885-1.886L53.724 8.39c.52-.521 1.365-.521 1.886 0Z" clip-rule="evenodd"/></svg>
      :
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><path fill="#2B3151" fill-rule="evenodd" d="M32 18.667c-9.729 0-18.023 5.751-21.438 13.851a1.333 1.333 0 1 1-2.457-1.036C11.942 22.382 21.212 16 32 16s20.058 6.382 23.895 15.482a1.333 1.333 0 1 1-2.457 1.036c-3.415-8.1-11.71-13.851-21.438-13.851Z" clip-rule="evenodd"/><path fill="#2B3151" fill-rule="evenodd" d="M32 45.333c-9.729 0-18.023-5.751-21.438-13.851a1.333 1.333 0 1 0-2.457 1.036C11.942 41.618 21.212 48 32 48s20.058-6.382 23.895-15.482a1.333 1.333 0 1 0-2.457-1.036c-3.415 8.1-11.71 13.851-21.438 13.851Z" clip-rule="evenodd"/><path fill="#2B3151" fill-rule="evenodd" d="M32 25.334a6.667 6.667 0 1 0 0 13.333 6.667 6.667 0 0 0 0-13.333ZM22.667 32a9.333 9.333 0 1 1 18.666 0 9.333 9.333 0 0 1-18.666 0Z" clip-rule="evenodd"/></svg>
      }
    </div>
  )
}

export default HideSvg