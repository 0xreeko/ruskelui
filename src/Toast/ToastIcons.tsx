import React from 'react'

export const success = <svg xmlns="http://www.w3.org/2000/svg" className="text-green-400" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <circle cx={12} cy={12} r={9}></circle>
  <path d="M9 12l2 2l4 -4"></path>
</svg>
export const info = <svg xmlns="http://www.w3.org/2000/svg" className="text-azure-400" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <circle cx={12} cy={12} r={9}></circle>
  <line x1={12} y1={8} x2="12.01" y2={8}></line>
  <polyline points="11 12 12 12 12 16 13 16"></polyline>
</svg>
export const warn = <svg xmlns="http://www.w3.org/2000/svg" className="text-amber-400" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <path d="M12 9v2m0 4v.01"></path>
  <path d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"></path>
</svg>
export const error = <svg xmlns="http://www.w3.org/2000/svg" className="text-scarlet-400" width={24} height={24} viewBox="0 0 24 24" stroke-width={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
  <circle cx={12} cy={12} r={9}></circle>
  <path d="M10 10l4 4m0 -4l-4 4"></path>
</svg>