import { GridPreview } from './GridPreview'
import { withRouter } from 'react-router-dom'
import qs from 'qs'
import { compose, branch, renderNothing, flattenProp } from 'recompose'

export const GridPreviewContainer = compose(
  withRouter,
  flattenProp('location'),
  branch(({ search }) => qs.parse(search.slice(1)).gridPreview !== 'true', renderNothing)
)(GridPreview)
