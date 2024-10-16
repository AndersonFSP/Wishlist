import axios, { AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios'

class httpProvider {
  private http: AxiosInstance

  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
      timeout: 30000,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.updateInterceptors()
  }

  public get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
    return this.http.get<T>(url, options).then(this.getData)
  }

  public getResponse<T>(url: string, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.get<T>(url, options)
  }

  public postResponse<T>(url: string, data?: unknown, options?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.http.post<T>(url, data, options)
  }

  public post<T>(url: string, data?: unknown, options?: AxiosRequestConfig): Promise<T> {
    return this.http.post(url, data, options).then(this.getData)
  }

  public put<T>(url: string, data?: unknown, options?: AxiosRequestConfig): Promise<T> {
    return this.http.put(url, data, options).then(this.getData)
  }

  public upload<T>(url: string, data?: Record<string, unknown>, options?: AxiosRequestConfig): Promise<T> {
    return this.http.put(url, data?.file, options).then(this.getData)
  }

  public patch<T>(url: string, data?: unknown, options?: AxiosRequestConfig): Promise<T> {
    return this.http.patch(url, data, options).then(this.getData)
  }

  public delete<T>(url: string, data?: AxiosRequestConfig<unknown>): Promise<T> {
    return this.http.delete(url, data).then(this.getData)
  }

  private updateInterceptors() {
    this.http.interceptors.response.use(this.handleSuccess, this.handleError)
  }

  private setHeaders(config: AxiosRequestConfig): AxiosRequestConfig {
    config.headers = {
      'Content-Type': 'application/json'
    }

    return config
  }

  private getData<T>(response: AxiosResponse<T>): T {
    return response.data
  }

  private handleSuccess(response: AxiosResponse): AxiosResponse {
    return response
  }

  private handleError(error: AxiosError): Promise<AxiosError> {
    if (error?.response?.data) return Promise.reject(error.response.data);
    return Promise.reject(error);
  }
}

export default new httpProvider()
