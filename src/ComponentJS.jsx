import React from 'react'
import { double } from './jsutils'

export default function ComponentJS({ value }) {
	return <span>JavaScript Component. { double(value) }</span>
}