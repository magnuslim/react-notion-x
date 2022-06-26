import * as notion from 'notion-types'

export interface SignedUrlRequest {
  permissionRecord: PermissionRecord
  url: string
}

export interface PermissionRecord {
  table: string
  id: notion.ID
}

export interface SignedUrlResponse {
  signedUrls: string[]
}

interface Backlink {
  block_id: notion.ID // The id of the mentioned block. Usually a page, or a synced block
  mentioned_from: {
    block_id: notion.ID // The block that mentioned the above block
    pointer: {
      id: notion.ID
      spaceId: notion.ID
      table: 'block' | string
    }
    property_id: 'title' | string
    type: 'property_mention' | 'collection_reference'
  }
}

export interface GetBacklinksForBlockResponse {
  backlinks: Backlink[]
  recordMap: notion.RecordMap // missing the "space" field in the definition
  inaccessibleBacklinkCount: number
}
