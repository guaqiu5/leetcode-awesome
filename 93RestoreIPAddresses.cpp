//dfs
//1.已经得4段ip并且传入的s遍历完成
//2.没找到4段ip,但s已经遍历完成
//3.当前遍历的字符串有0,那这一段ip只能为0
//4.一般情况，枚举出每一种情况 然后递归

#include<iostream>
#include<vector>
#include<string>
using namespace std;
class Solution {
private:
    vector<string> ans;
    vector<string> temp;
public:
    void dfs(string s,int start) {
        if (start == s.size() && temp.size() == 4) {//temp中有4段且s结束
           string str = temp[0];
           for (int i = 0;i<3;++i) {
               str = str + '.' + temp[i+1];
           }
           ans.push_back(str);//ans中保存一种可行方案
           return; 
        }
        else if (start < s.size() && temp.size() == 4) {//s有字符没用完
            return;
        }
        for (int len = 1;len <= 3;len++) {//temp中每一个string只能存长度1~3的字符串
            if (start >= s.size()) //注意是>=，超过了s的索引
                return;
            if (len != 1 && s[start] == '0') //0x,00x非法
                return;
            string str = s.substr(start,len);//切割字符串
            if (len == 3 && atoi(str.c_str()) > 255) //不能大于255
                return;
            temp.push_back(str);
            dfs(s,start+len);
            temp.pop_back();
        }
    }
    vector<string> restoreIpAddresses(string s) {
        dfs(s,0);
        return ans;
    }
};

//test
int main(){
    Solution solution;
    vector<string> ans=solution.restoreIpAddresses("25525511135");
    for(auto x:ans){
        cout<<x<<endl;
    }
}