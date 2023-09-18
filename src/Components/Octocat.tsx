import React from 'react'

type OctocatProps = {
  title: string
  number: string
  authors: string[]
}

export function Octocat(props: OctocatProps) {
  return (
    <article>
      <a href={`https://octodex.github.com//${props.title}/`}>
        <img
          src={`https://octodex.github.com/images/${props.title.toLowerCase()}.png`}
          width="400"
          height="400"
          alt={props.title}
        />
      </a>
      <ul>
        <li>
          #{props.number}:
          <a href={`https://octodex.github.com//${props.title}/`}>
            {props.title}
          </a>
        </li>

        <li>
          {props.authors.map((author, i) => (
            <a key={i} href={`https://github.com/${author}`}>
              <img
                src={`https://github.com/${author}.png`}
                width="24px"
                height="24px"
                alt={author}
              />
            </a>
          ))}
        </li>
      </ul>
    </article>
  )
}
