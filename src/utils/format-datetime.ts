import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const getFormattedDate = (getDate: string) => {
  const date = new Date(getDate)
  const dateNow = new Date()
  const diffiInMs = dateNow.getTime() - date.getTime()
  const diffiInHours = diffiInMs / (1000 * 60 * 60)

  return diffiInHours < 24
    ? formatRelativeDate(getDate)
    : formatDateTime(getDate)
}

export const formatRelativeDate = (getDate: string) => {
  return formatDistanceToNow(getDate, { locale: ptBR, addSuffix: true })
}

const formatDateTime = (getDate: string) => {
  return format(getDate, "dd/MM/yyy 'às' HH'h'mm")
}
