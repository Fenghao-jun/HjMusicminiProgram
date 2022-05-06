import mRequire from "./index";
import mRequest from "./index";

/**
 * 获取音乐的轮播图
 */
export function getMusicBanner() {
  return mRequire.get("/banner", {
    type: 2,
  });
}

export function getRankingSongs(idx = 0) {
  return mRequire.get("/top/list", {
    idx,
  });
}

export function getMenuListSongs(cat = "全部", limit = 6, offset = 0) {
  return mRequire.get("/top/playlist", {
    cat,
    limit,
    offset,
  });
}
