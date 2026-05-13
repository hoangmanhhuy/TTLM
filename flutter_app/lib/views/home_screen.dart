import 'package:flutter/material.dart';
import 'package:lucide_icons/lucide_icons.dart';
import 'package:provider/provider.dart';
import '../viewmodels/viewmodels.dart';
import '../models/models.dart';
import 'login_screen.dart';

class PublicHomeScreen extends StatelessWidget {
  const PublicHomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("THÔNG TIN LINH MỤC", style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
        actions: [
          TextButton.icon(
            onPressed: () => Navigator.push(context, MaterialPageRoute(builder: (_) => const LoginScreen())),
            icon: const Icon(LucideIcons.logOut, size: 16),
            label: const Text("Đăng nhập"),
          )
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildSearchCard(),
            const SizedBox(height: 20),
            _buildEmergencyCard(),
            const SizedBox(height: 20),
            _buildLiturgicalCard(context),
          ],
        ),
      ),
    );
  }

  Widget _buildSearchCard() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(32),
        border: Border.all(color: Colors.grey.shade100),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text("Tìm kiếm linh mục", style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900)),
          const SizedBox(height: 16),
          TextField(
            decoration: InputDecoration(
              hintText: "Nhập tên linh mục",
              prefixIcon: const Icon(LucideIcons.search, size: 20),
              filled: true,
              fillColor: Colors.grey.shade50,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildEmergencyCard() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: const Color(0xFFFFF1F1),
        borderRadius: BorderRadius.circular(32),
        border: Border.all(color: Colors.red.shade50),
      ),
      child: Row(
        children: [
          const Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text("DÀNH CHO TRƯỜNG HỢP KHẨN CẤP", style: TextStyle(fontSize: 10, fontWeight: FontWeight.bold, color: Colors.redAccent)),
                Text("Liên hệ xức dầu", style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: Color(0xFF7F1D1D))),
                Text("Tìm linh mục gần nhất", style: TextStyle(fontSize: 12, color: Colors.redAccent)),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: Colors.red.shade100, borderRadius: BorderRadius.circular(16)),
            child: const Icon(LucideIcons.phone, color: Colors.red),
          )
        ],
      ),
    );
  }

  Widget _buildLiturgicalCard(BuildContext context) {
    final viewModel = context.read<LiturgicalViewModel>();
    final data = viewModel.getLiturgicalData(DateTime.now());
    
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: const Color(0xFFFFF9F2),
        borderRadius: BorderRadius.circular(32),
        border: Border.all(color: Colors.orange.shade50),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(LucideIcons.bookOpen, color: Colors.orange.shade600, size: 20),
              const SizedBox(width: 8),
              const Text("LỜI CHÚA HÔM NAY", style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: Colors.orangeAccent)),
            ],
          ),
          const SizedBox(height: 12),
          Text(data.feast, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 13, color: Color(0xFF7C2D12))),
          const SizedBox(height: 8),
          const Text("\"Ta là con đường, là sự thật và là sự sống.\"", style: TextStyle(fontSize: 15, fontStyle: FontStyle.italic, color: Colors.black87)),
        ],
      ),
    );
  }
}

class PriestHomeScreen extends StatelessWidget {
  const PriestHomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final liturgicalData = context.read<LiturgicalViewModel>().getLiturgicalData(DateTime.now());
    final auth = context.read<AuthViewModel>();

    return Scaffold(
      backgroundColor: const Color(0xFFF8FAFF),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: const Text("Thông tin Linh mục", style: TextStyle(fontSize: 14, fontWeight: FontWeight.w900, color: Color(0xFF2563EB))),
        actions: [
          IconButton(onPressed: () => auth.logout(), icon: const Icon(LucideIcons.logOut)),
          IconButton(onPressed: () {}, icon: const Icon(LucideIcons.bell)),
        ],
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            _buildIDCard(auth.currentUser!),
            const SizedBox(height: 20),
            _buildActionBar(),
            const SizedBox(height: 20),
            _buildLiturgicalSection(liturgicalData),
          ],
        ),
      ),
    );
  }

  Widget _buildIDCard(UserProfile user) {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        gradient: const LinearGradient(colors: [Color(0xFF0EA5E9), Color(0xFF2563EB)]),
        borderRadius: BorderRadius.circular(32),
        boxShadow: [BoxShadow(color: Colors.blue.withOpacity(0.2), blurRadius: 20, offset: const Offset(0, 10))],
      ),
      child: Row(
        children: [
          Container(
            width: 56, h: 56,
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16)),
            child: const Icon(LucideIcons.user, color: Colors.blue, size: 32),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text("CĂN CƯỚC LINH MỤC", style: TextStyle(color: Colors.white70, fontSize: 10, fontWeight: FontWeight.w900)),
                Text(user.holyName.toUpperCase(), style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w900)),
                Text(user.fullName.toUpperCase(), style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900)),
                Text(user.diocese, style: const TextStyle(color: Colors.white70, fontSize: 10, fontWeight: FontWeight.bold)),
              ],
            ),
          )
        ],
      ),
    );
  }

  Widget _buildActionBar() {
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(32)),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          _actionItem(LucideIcons.nfc, "Quét thẻ", Colors.orange),
          _actionItem(LucideIcons.clock, "Xin lễ", Colors.indigo),
          _actionItem(LucideIcons.qrCode, "Mã QR", Colors.fuchsia),
          _actionItem(LucideIcons.fingerprint, "FaceID", Colors.emerald),
        ],
      ),
    );
  }

  Widget _actionItem(IconData icon, String label, Color color) {
    return Column(
      children: [
        Container(
          width: 48, h: 48,
          decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(16), boxShadow: [BoxShadow(color: color.withOpacity(0.3), blurRadius: 10)]),
          child: Icon(icon, color: Colors.white, size: 24),
        ),
        const SizedBox(height: 8),
        Text(label, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Colors.black54)),
      ],
    );
  }

  Widget _buildLiturgicalSection(LiturgicalData data) {
    return Container(
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(24)),
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(color: Colors.emerald.withOpacity(0.05), borderRadius: const BorderRadius.vertical(top: Radius.circular(24))),
            child: Row(
              children: [
                const Icon(LucideIcons.calendar, color: Colors.emerald),
                const SizedBox(width: 12),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text("NGÀY PHỤNG VỤ", style: TextStyle(color: Colors.emerald, fontSize: 10, fontWeight: FontWeight.w900)),
                    Text(data.dateString, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w900)),
                  ],
                ),
                const Spacer(),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                  decoration: BoxDecoration(color: Colors.emerald.shade50, borderRadius: BorderRadius.circular(8)),
                  child: Text(data.season, style: const TextStyle(color: Colors.emerald, fontSize: 9, fontWeight: FontWeight.w900)),
                )
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              children: data.readings.map((r) => Padding(
                padding: const EdgeInsets.only(bottom: 12),
                child: Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(color: r.color, borderRadius: BorderRadius.circular(8)),
                      child: Icon(r.icon, color: r.iconColor, size: 16),
                    ),
                    const SizedBox(width: 12),
                    Text(r.label, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.bold, color: Colors.black54)),
                    const Spacer(),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                      decoration: BoxDecoration(color: Colors.blue.withOpacity(0.05), borderRadius: BorderRadius.circular(6)),
                      child: Text(r.text, style: const TextStyle(color: Color(0xFF2563EB), fontSize: 11, fontWeight: FontWeight.w900)),
                    )
                  ],
                ),
              )).toList(),
            ),
          )
        ],
      ),
    );
  }
}
