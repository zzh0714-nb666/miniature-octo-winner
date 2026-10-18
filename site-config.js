// ====== 站点配置（只需修改这里） ======
// GitHub 用户名和仓库名，图片和配置会存储在这个仓库里
// 仓库需设为公开，图片通过 jsdelivr CDN 访问
window.SITE_CONFIG = {
  githubOwner: 'zzh0714-nb666',
  githubRepo: 'miniature-octo-winner',
  // 不要修改下面的内容
  get cdnBase() {
    return 'https://cdn.jsdelivr.net/gh/' + this.githubOwner + '/' + this.githubRepo;
  },
  get apiBase() {
    return 'https://api.github.com/repos/' + this.githubOwner + '/' + this.githubRepo + '/contents';
  }
};
