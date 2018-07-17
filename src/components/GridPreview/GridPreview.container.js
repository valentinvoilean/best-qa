import { GridPreview } from './GridPreview'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import { compose, branch, renderNothing, flattenProp } from 'recompose'

export const GridPreviewContainer = compose(
  withRouter,
  flattenProp('location'),
  branch(({ search }) => queryString.parse(search).gridPreview !== 'true', renderNothing)
)(GridPreview)
