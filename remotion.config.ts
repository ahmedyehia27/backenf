import { Config } from '@remotion/cli/config';

Config.setCodec('h264');
Config.setPixelFormat('yuv420p');
Config.setConcurrency(4);
Config.setChromiumDisableWebSecurity(true);
Config.setChromiumOpenGlRenderer('swangle');
Config.setChromiumHeadlessMode(true);
Config.setChromiumMultiProcessOnLinux(true);
Config.setOffthreadVideoCacheSizeInBytes(256 * 1024 * 1024);



