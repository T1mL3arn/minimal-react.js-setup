import { getLen } from "./tsutil"
import React from 'react'

export function ComponentTS({ list }:{ list:any[] }) {
	return <div>
		<p>Hello there!</p>
		<span>TypeScript Component. { getLen(list)}</span>
	</div>
}