import settings from '@/web/states/settings'
import { useTranslation } from 'react-i18next'
import { useSnapshot } from 'valtio'
import { BlockDescription, BlockTitle, Option, OptionText, Switch, Input } from './Controls'
import Slider from '@/web/components/Slider'
import { cx } from '@emotion/css'
import player from '@/web/states/player'
import { ceil } from 'lodash'
import { useMutation, useQuery } from '@tanstack/react-query'
import { IpcChannels } from '@/shared/IpcChannels'
import { useCopyToClipboard } from 'react-use'

function Player() {
  return (
    <div className={cx(`space-y-7`)}>
      <FindTrackOnYouTube />
    </div>
  )
}

function FindTrackOnYouTube() {
  const { t, i18n } = useTranslation()

  const { enableFindTrackOnYouTube, httpProxyForYouTube } = useSnapshot(settings)

  return (
    <div>
      <BlockTitle>{t`settings.player-youtube-unlock`}</BlockTitle>
      <BlockDescription>
        {t`settings.player-find-alternative-track-on-youtube-if-not-available-on-netease`}
        {i18n.language === 'zh-CN' && (
          <>
            <br />
            此功能需要开启 Clash for Windows 的 TUN Mode 或 ClashX Pro 的增强模式。
          </>
        )}
      </BlockDescription>
      {/* Switch */}
      <Option>
        <OptionText>Enable YouTube Unlock</OptionText>
        <Switch
          enabled={enableFindTrackOnYouTube}
          onChange={value => (settings.enableFindTrackOnYouTube = value)}
        />
      </Option>

      {/* Proxy */}
      {/* <Option>
        <OptionText>
          HTTP Proxy config for connecting to YouTube {httpProxyForYouTube?.host && '(Configured)'}
        </OptionText>
        <Button
          onClick={() => {
            toast('开发中')
          }}
        >
          Edit
        </Button>
      </Option> */}
    </div>
  )
}

export default Player
