"use server"
import axios from "axios"

const API_BASE_URL = "https://api.denaroai.com"
const API_KEY = process.env.INTERVIEW_KEY

export interface DemoCustomer {
  id: string
  name: string
  balance: string
  balanceAge: number
  createdAt: number
  updatedAt: number
}

export interface CreateCustomerInput {
  name: string
  balance: string
  balanceAge: number
}

export interface UpdateCustomerInput {
  name: string
  balance: string
  balanceAge: number
}

// Write the functions here