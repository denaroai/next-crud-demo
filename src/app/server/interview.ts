"use server"
import axios from "axios"

const API_BASE_URL = "https://api.denaroai.com"
const API_KEY = process.env.INTERVIEW_KEY

if (!API_KEY) {
  throw new Error("INTERVIEW_KEY environment variable is not set")
}

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

const axiosInstance = axios.create({
  headers: {
    "interview-api-key": API_KEY,
  },
})

export async function createCustomer(input: CreateCustomerInput): Promise<DemoCustomer[]> {
  const response = await axiosInstance.post(`${API_BASE_URL}/interview/customers`, input)
  return response.data
}

export async function updateCustomer(customerId: string, input: UpdateCustomerInput): Promise<DemoCustomer[]> {
  const response = await axiosInstance.post(`${API_BASE_URL}/interview/customers/${customerId}`, input)
  return response.data
}

export async function deleteCustomer(customerId: string): Promise<{ success: boolean; customers: DemoCustomer[] }> {
  const response = await axiosInstance.delete(`${API_BASE_URL}/interview/customers/${customerId}`)
  return response.data
}

export async function getCustomers(): Promise<DemoCustomer[]> {
  const response = await axiosInstance.get(`${API_BASE_URL}/interview/customers`)
  return response.data
}
