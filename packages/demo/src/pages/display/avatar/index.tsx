import { Avatar, Badge } from "@taroify/core"
import * as React from "react"
import { Cross, SettingOutlined, LocationOutlined } from "@taroify/icons"
import Block from "../../../components/block"
import Page from "../../../components/page"
import "./index.scss"

export default function AvatarDemo() {
  return (
    <Page title="Avatar 头像" className="avatar-demo">
      <Block title="基础用法" className="avatar-block">
        <Avatar>P</Avatar>
        <Avatar style={{ background: "green" }}>N</Avatar>
        <Avatar style={{ background: "pink" }}>HP</Avatar>
      </Block>

      <Block title="尺寸" className="avatar-block">
        <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg" size="mini"></Avatar>
        <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg" size="small"></Avatar>
        <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg" size="medium"></Avatar>
        <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg" size="large"></Avatar>
      </Block>
      <Block title="形状" className="avatar-block">
        <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
        <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg" variant="square"></Avatar>
        <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg" variant="rounded"></Avatar>
      </Block>
      <Block title="群组" className="avatar-block">
        <Avatar.Group total={24} spacing="medium">
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
        </Avatar.Group>
      </Block>
      <Block title="最大" className="avatar-block">
        <Avatar.Group max={3} spacing="small" variant="square">
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
        </Avatar.Group>
      </Block>
      <Block title="图标" className="avatar-block">
        <Avatar style={{ background: "red" }}>
          <Cross />
        </Avatar>
        <Avatar style={{ background: "pink" }}>
          <LocationOutlined />
        </Avatar>
        <Avatar style={{ background: "green" }}>
          <SettingOutlined />
        </Avatar>
      </Block>
      <Block title="徽章用法" className="avatar-block">
        <Badge content={<Cross />} position="bottom-right">
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
        </Badge>
        <Badge content={<SettingOutlined></SettingOutlined>} position="bottom-right">
          <Avatar src="https://img01.yzcdn.cn/vant/cat.jpeg"></Avatar>
        </Badge>
      </Block>
    </Page>
  )
}