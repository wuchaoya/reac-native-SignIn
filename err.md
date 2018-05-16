react-native-vector-icons 

react-native link react-native-vector-icons 后运行出错

这个是系统版本引发的问题，因为 React Native 系统配置的文件和 react-native-vector-icons 里面的文件重复了，解决方法就是删除重复的文件，到 /node_modules/react-native/local-cli/core/_fixtures_/files/package.json 里面删除了 package.json 即可，删除之前记得备份一下文件。


React Native version mismatch.

打开 android/app/build.gradle 将

compile "com.facebook.react:react-native:+"

修改为 compile ("com.facebook.react:react-native:xx.xx.xx") { force = true }  