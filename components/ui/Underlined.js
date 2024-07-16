export default function Circled({ word }) {
    return (
        <span className="relative px-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="10"
                ariaHidden="true"
                className="absolute -bottom-1 left-0 w-full opacity-20 "
                preserveAspectRatio="none"
                viewBox="0 0 120 10"
            >
                <path fill="currentColor" d="M118.273 6.09C79.243 4.558 40.297 5.459 1.305 9.034c-1.507.13-1.742-1.521-.199-1.81C39.81-.228 79.647-1.568 118.443 4.2c1.63.233 1.377 1.943-.17 1.89z"></path>
            </svg>
            {word}
        </span>
    )
}
