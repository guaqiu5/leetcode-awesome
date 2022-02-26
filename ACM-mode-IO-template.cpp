#include<bits/stdc++.h>

using namespace std;

void fast_read() {
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);
    cout.tie(nullptr);
}

int t, n;

int main() {
    fast_read(); // 快速cin，cout，开了这个就不能用printf和scanf了
    cin >> t; // 测试用例个数
    while (t--) {
        cin >> n; // 数组长度
        vector<int> ls(n); // 初始化vector
        for (int i = 0; i < n; i++) cin >> ls[i];// vector赋值

    }
}
