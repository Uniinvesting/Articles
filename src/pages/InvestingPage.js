import React from 'react'
import {investment_articles} from '../data/investment_articles'

export default function Investing_Page() {
  return (
    <div class='coverpage-background'>
      <div className='centered-text'>Investing</div>
      <div id='investing-articles'>
        {investment_articles.map((data, key) => {
          return (
            <a href={data.link}>
              <div className='article-box' key={key} id={data.id}>
                <div className='color-header'></div>
                <div className='article-title'>{data.article_name}</div>
                <div className='article-author'>By: {data.author}</div>
                <div className='article-dscr'>{data.sub_title}</div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
